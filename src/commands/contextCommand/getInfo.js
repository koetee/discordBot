const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
  Embed,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("getInfo")
    .setType(ApplicationCommandType.User)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    const info_embed = new EmbedBuilder()
      .setTitle(`Information about ${interaction.targetUser.username}`)
      .setAuthor({
        name: interaction.targetUser.tag,
        iconURL: interaction.targetUser.displayAvatarURL(),
      })
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      );

    await interaction.reply({
      ephemeral: true,
      embeds: [info_embed],
    });
  },
};
