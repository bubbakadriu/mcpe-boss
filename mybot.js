const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Okay Bubba, i am ready to kick ass!");
});

bot.on("message", (message) => {
  if (message.content.startsWith(".help")) {
    message.channel.send("Here is a list of all our cmds:\nhello");
  }
});


bot.on("message", (message) => {
  if (message.content.startsWith(".test")) {
    message.reply('Test confirmed & working')
  }
});

bot.login("NDM1MTkzNzQyNDgwMTEzNjc0.DbViHQ.fp_QXXvd4Wkd_UnqKqMDUSWhUNA");