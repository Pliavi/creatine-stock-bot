const bot = require("./src/app");

function handler(params) {
  bot.startBot();
}

exports.handler = handler;
