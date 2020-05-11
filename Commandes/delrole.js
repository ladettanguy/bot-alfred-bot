const Discord = require('discord.js');

module.exports.run = async(client,message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return message.channel.send(`vous n'avez pas la permission !`);
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
        return message.channel.send('Je n\'ai pas la permission !');

    let member = message.guild.member(message.mentions.users.first());$
    if(!member) return message.channel.send(`L'utilisateur n'a pas été trouvé`)

    let role = message.guild.roles.find(x => x.name === args[1]);

    member.removeRole(role).catch(console.error).then(message => {
        message.channel.send(`${member} n'a plus le rôle ${role.name}`);
    });
}

module.exports.help = {
    name:"delrole"
}