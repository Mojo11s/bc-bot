const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on("ready", () => {
  console.log("i'am ready to fuck")

}
          
client.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say1")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});

client.login(token).catch(err => console.log{err});
