const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("sex").setDescription("sex?"),
  async execute(interaction) {

 
    await interaction.reply({
      content: `${interaction.user} нереально трахнул ${
        interaction.guild.members.cache.random().user
      }`,
    });
  },
};
