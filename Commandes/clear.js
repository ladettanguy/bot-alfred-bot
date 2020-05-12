const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    //vérification de permission de l'utilisateur
    if(!message.guild.member(message.author).hasPermission('')) return message.channel.send("Vous n'avez pas la permission")
    .catch(console.error);
    //vérification de permission du Bot
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`le bot n'a pas la permission !`)
    .catch(console.error);
    //vérification de présence d'un argument
    if(!args[0]) return message.channel.send(`Vous devez spécifier un  nombre de messages à supprimer !`);
    //vérification d'un nombre passer en argument
    if(isNaN(args[0])) return message.channel.send(`Vous devez spécifier un nombre`);

    message.channel.bulkDelete(args[0]+1)
    .then(message =>{
        message.channel.send(`${args[0]} message(s) ont été supprimés !`);
    })
    .catch(console.error);
};

module.exports.help = {
    name: "clear"
}