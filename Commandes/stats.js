const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    //testé si un membre est trouvé
    if(!membre) return message.channel.send(`veuillez mentionner un utilisateur !`);
    console.log(membre.user)
    message.channel.send({
        embed:{
            color: 0x755555,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: `${membre.user.displayAvatarURL}`
            },
            fields: 
            [
                {
                    name: "> ID :",
                    value: membre.id
                },
                {
                    name: "> Crée le : ",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: "> Jeu :",
                    value: `${membre.user.activities ? membre.user.activities : "Aucun jeu en cours"}`
                },
                {
                    name: "> Rejoin le serveur le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer:{
                text: `Information de l'utilisateur ${membre.user.username}`
            }
        }
    })
};

module.exports.help = {
    name: "stats"
}