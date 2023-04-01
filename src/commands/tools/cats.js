const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cats")
    .setDescription("Get random cat"),
  async execute(interaction, client) {
    var url = "https://meow.senither.com/v1/random";
    try {
      while (true) {
        const response = await fetch(url);
        const json = await response.json();

        if (json.data.type === "gif" || json.data.type === "jpg") {
          const embed = new EmbedBuilder()
            .setTitle(`ammm...`)
            .setColor(0x18e1ee)
            .setImage(json.data.url)
            .setAuthor({
              iconURL: interaction.user.displayAvatarURL(),
              name: interaction.user.tag,
            });

          await interaction.reply({
            embeds: [embed],
          });
          break;
        }
      }
    } catch (error) {
      await interaction.reply({
        content: `error: ${error}`,
        ephemeral: true,
      });
      console.error(error);
    }
  },
};
