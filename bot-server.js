var https = require("https");
var http = require("http");

var BOT_TOKEN = "8797441270:AAGyJ8CIxeHJ-CO1DAerQGF_BKfcg-TfSUg";
var CHAT_ID = "8817975742";

function tgApi(method, data) {
  return new Promise(function(resolve, reject) {
    var body = JSON.stringify(data);
    var req = https.request({
      hostname: "api.telegram.org",
      path: "/bot" + BOT_TOKEN + "/" + method,
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) }
    }, function(res) {
      var data = "";
      res.on("data", function(chunk) { data += chunk; });
      res.on("end", function() { resolve(JSON.parse(data)); });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function handleCallback(callbackQuery) {
  var data = callbackQuery.data;
  var msg = callbackQuery.message;
  var chatId = msg.chat.id;
  var orderId = data.split("_")[1] || "";
  var action = data.split("_")[0];

  if (action === "accept") {
    var newText = msg.text + "\n\n\u2705 <b>Qabul qilindi!</b>";
    tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msg.message_id,
      text: newText,
      parse_mode: "HTML"
    });
    tgApi("answerCallbackQuery", {
      callback_query_id: callbackQuery.id,
      text: "Buyurtma #" + orderId + " qabul qilindi!",
      show_alert: true
    });
  } else if (action === "ready") {
    var newText2 = msg.text + "\n\n\uD83D\uDCE6 <b>Tayyor!</b> Mijoz olib ketishi mumkin.";
    tgApi("editMessageText", {
      chat_id: chatId,
      message_id: msg.message_id,
      text: newText2,
      parse_mode: "HTML"
    });
    tgApi("answerCallbackQuery", {
      callback_query_id: callbackQuery.id,
      text: "Buyurtma #" + orderId + " tayyor!",
      show_alert: true
    });
  }
}

var updates = [];
var offset = 0;

function poll() {
  tgApi("getUpdates", { offset: offset, timeout: 30 }).then(function(res) {
    if (res.ok && res.result) {
      for (var i = 0; i < res.result.length; i++) {
        var update = res.result[i];
        offset = update.update_id + 1;
        if (update.callback_query) {
          handleCallback(update.callback_query);
        }
      }
    }
    poll();
  }).catch(function(err) {
    console.error("Polling xatosi:", err.message);
    setTimeout(poll, 5000);
  });
}

console.log("Bot ishga tushdi... Callback tugmalarini kutishda.");
console.log("To'xtatish uchun: Ctrl+C");
poll();
