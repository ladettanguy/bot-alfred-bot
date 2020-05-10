const Discord = require('discord.js');
const prefix = "!";

module.exports = async(client, message) => {
    //ignorer les autres bots
    if(message.author.bot) return;
    //ignore les messages privé
    if(message.channel.type === "dm") return;
    //ignore les messages sans le préfix
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);
    //si la commande n'existe pas
    if(!cmd) return;

    cmd.run(client, message, args);
}