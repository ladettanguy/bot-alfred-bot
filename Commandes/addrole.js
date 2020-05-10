const Discord = require('discord.js');

module.exports.run = async(client,message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return message.channel.send('Je n\'ai pas la permission !');
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
        return message.channel.send('Je n\'ai pas la permission !');

    let member = message.guild.member(message.author);

    let role = message.guild.roles.find(x => x.name === "Administrateur");

    member.addRole(role).catch(console.error);
    message.channel.send(`${member} a maintenant le rôle ${role.name}`);
}

module.exports.help = {
    name:"addrole"
}