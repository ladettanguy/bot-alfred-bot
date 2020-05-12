module.exports = async(client) => {
    client.user.setPresence({
        activity: {
            name: "l'Administration du serveur"
        }
    });
    console.log("je suis connecté")
};