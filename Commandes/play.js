const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
    console.log(message.guild.member(message.author)+ " \n \n");
    console.log(message.guild.me);
    if (!message.author.voiceChannel) return message.channel.send("Connectez vous à un salon vocal et recommencez");
    if (!message.guild.me.voiceChannel) return message.channel.send("Je suis déjà connectez à un salon vocal");
    if (!args[0]) return message.channel.send("Ecrivez un lien YouTube après !play");

    const validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("Désolé, le lien YouTube n'est pas valide")

    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voiceChannel.join();
    const dispatcher = await connection.play(
        ytdl(args[0], {filter: 'audioonly'})
    );
    message.channel.send(`Musique ajoutée : ${info.title}`)
};

module.exports.help = {
    name: "play"
}