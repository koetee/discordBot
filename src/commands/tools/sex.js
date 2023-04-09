const {
  SlashCommandBuilder,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sex")
    .setDescription("sex?")
    .addUserOption((option) =>
      option
        .setName("input")
        .setDescription("The User to sex")
        .setRequired(true)
    ),
  async execute(interaction) {
    const target = interaction.options.getUser("input");
    await interaction.reply({
      content: `${interaction.user} нереально трахнул ${target}`,
    });
  },
};
