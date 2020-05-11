const Discord = require('discord.js');

module.exports.run = async(client,message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return message.channel.send(`vous n'avez pas la permission !`);
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
        return message.channel.send('Je n\'ai pas la permission !');

    let member = message.guild.member(message.mentions.users.first());
    if(!member) return message.channel.send(`L'utilisateur n'a pas été trouvé`);

    let role = message.guild.roles.resolve(x => x.name === args[1]);

    console.log(member);
    console.log(role);
    member.addRole(role.id).catch(console.error).then(message => {
        message.channel.send(`${member} a maintenant le rôle ${role.name}`);
    });
}

module.exports.help = {
    name:"addrole"
}