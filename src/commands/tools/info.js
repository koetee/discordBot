const {
  SlashCommandBuilder,
  EmbedBuilder,
  Embed,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Return information about the bot"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

   
    const info_embed = new EmbedBuilder()
      .setTitle(`Information`)
      .setColor(0xce2029)
      .addFields(
        { name: 'API Latency', value: `${client.ws.ping}`, inline: true },
        { name: 'Client Ping', value: `${message.createdTimestamp - interaction.createdTimestamp}`, inline: true },
        { name: 'Member Count', value: `${interaction.guild.memberCount}`, inline: true },
        { name: 'Members ', value: `${client.users.cache.size}`, inline: true },
      );

    await interaction.editReply({
      embeds: [info_embed],
    });
  },
};
