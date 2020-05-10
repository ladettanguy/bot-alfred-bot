const discord = require('discord.js');

module.export.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send("ping").then(async(m) =>{
        await m.edit(`pong : ${Date.now() - début} ms`);
    });
};

module.exports.help = {
    name: "ping"
}