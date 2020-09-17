const fs = require('fs')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args, settings) => {
  //Check if this command is banned
  fs.readFile('././storage/resources/random-facts.json', (err, data) => {
    if (err) throw err;
    var facts = JSON.parse(data);
    //Displays a random fact (3056 facts)
    var num = (Math.floor((Math.random() * 3056) + 0))
    var embed = new Discord.MessageEmbed()
    .setTitle("Random Fact:")
    .setDescription(facts.facts[num])
    message.channel.send(embed)
  });
}
module.exports.config = {
	command: "fact",
	aliases: ["fact"]
}
module.exports.help = {
	name: "Fact",
	category: "Fun",
	description: "Sends a random fact",
	usage: '!fact',
}