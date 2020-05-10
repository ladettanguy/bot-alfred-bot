module.exports = async(client) => {
    client.user.setPresence({
        game: {
            name: "Administration"
        }
    });
    console.log("je suis connecté")
};