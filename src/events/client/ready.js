module.exports = {
  name: `ready`,
  once: true,

  async execute(client) {
    setInterval(client.pickPresence, 10 * 1000);

    console.log(
      `${client.user.tag} is online. Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`
    );
  },
};
