const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");

bot.on('ready', e=>{
    console.log('Je suis connecté')
});

bot.on('message', function(message){
    console.log(message.guild.roles)
});

bot.on('messageReactionAdd', function(messageReaction){
    let role = messageReaction.message.guild.roles.resolve('name','numberA');
    messageReaction.message.member.addRole(role);
    console.log(messageReaction.message.content);
});

bot.on('guildMemberAdd', member =>{
    let embed = new Discord.MessageEmbed()
        .setDescription(':tada: **'+ member.user.username + '** a rejoint le Serveur ' + member.guild.name)
        .setFooter('nous somme donc ' + member.guild.memberCount+ ' sur le serveur')
        .setTitle('!! Nouveau soldat !!');
    member.channel.send(embed);
});

bot.on('guildMemberRemove', member =>{
    let embed = new Discord.MessageEmbed()
        .setDescription(':angry: **'+ member.user.username + '** est parti(e) du Serveur ' + member.guild.name + '\n on se portera bien mieux sans lui')
        .setFooter('nous somme donc ' + member.guild.memberCount+ ' sur le serveur')
        .setTitle('!! Un soldat est mort !!')
    member.channel.send(embed)
})

bot.login("NzA4MzIyNDc1ODQ2NjY0MzYy.XrVsLQ.fTOIBhRedU8KSSfD922_A4sO9KY");