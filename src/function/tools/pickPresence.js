const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
   
    const options = [
      {
        type: ActivityType.Watching,
        text: "Дароу,если я хуево играю то это не так,просто ты долбаеб =)",
        status: "online",
      },
      {
        type: ActivityType.Watching,
        text: " привет ты реально лил пипа любишь или просто по мефчику угараешь?",
        status: "online",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
