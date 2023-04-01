module.exports = {
  name: `messageCreate`,

  async execute(msg) {
    if (
      msg.author.id === "-274874981169758209" ||
      msg.author.id === "-327893554368086016"
    ) {
      console.log(`${msg.author.username}: ${msg.content}`);
      await msg.channel.sendTyping();

      let conversationLog = [
        {
          role: "system",
          content: `${msg.content}`,
        },
      ];
      const axios = require("axios");

      const data = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversationLog,
      });

      const config = {
        method: "post",
        url: "https://bing.khanh.lol/completion",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ prompt: "Hello, World!" }),
      };

      await axios(config)
        .then(async function (result) {
          console.log(result.data.response);
          msg.reply(`${result.data.response}`);
        })
        .catch((error) => {
          msg.reply(`Log: ${error} :sob:`);
          console.log(error);
        });
    } else return;
  },
};
