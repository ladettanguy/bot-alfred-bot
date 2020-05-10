const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");


client.on('messageReactionAdd', function(messageReaction){
    let role = messageReaction.message.guild.roles.resolve('name','numberA');
    messageReaction.message.member.addRole(role);
    console.log(messageReaction.message.content);
});

client.on('guildMemberAdd', member =>{
    let embed = new Discord.MessageEmbed()
        .setDescription(':tada: **'+ member.user.username + '** a rejoint le Serveur ' + member.guild.name)
        .setFooter('nous somme donc ' + member.guild.memberCount+ ' sur le serveur')
        .setTitle('!! Nouveau soldat !!');
    member.channel.send(embed);
});

client.on('guildMemberRemove', member =>{
    let embed = new Discord.MessageEmbed()
        .setDescription(':angry: **'+ member.user.username + '** est parti(e) du Serveur ' + member.guild.name + '\n on se portera bien mieux sans lui')
        .setFooter('nous somme donc ' + member.guild.memberCount+ ' sur le serveur')
        .setTitle('!! Un soldat est mort !!')
    member.channel.send(embed)
})

client.login("NzA4MzIyNDc1ODQ2NjY0MzYy.XrVsLQ.fTOIBhRedU8KSSfD922_A4sO9KY");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, files) => {
    if(error) console.log(error);

    let commandes = files.filter(files => files.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("aucune commande trouvé !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${files}`);
        console.log(`${files} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, files) => {
    if(error) console.log(error);
    console.log(`${files.length} event en chargement`);

    files.forEach((files) => {
        const events = require(`./Events/${files}`);
        const event = files.split(".")[0];

        client.on(event, events.bind(null,client));
    });
});