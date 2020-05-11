const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    if (!message.member.voiceChannel) return message.channel.send("Connectez vous à un salon vocal et recommencez");
    if (message.guild.me.voiceChannel) return message.channel.send("Je ne suis pas connecté !");
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Vous n'etes pas dans le salon vocal");
    message.guild.me.voiceChannel.leave();
    message.delete();
};

module.exports.help = {
    name: "stop"
}