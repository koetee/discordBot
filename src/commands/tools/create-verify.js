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
    .setName("create-verify")
    .setDescription("Return an verify button")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    
    const verify_embed = new EmbedBuilder()
      .setTitle(`Verification`)
      .setDescription(`Click the button to verify your account`)
      .setColor(0x17fd59);

    const button = new ButtonBuilder()
      .setCustomId(`verify`)
      .setLabel(`verify`)
      .setStyle(ButtonStyle.Success);

      await interaction.reply({
        embeds: [verify_embed],
        components: [new ActionRowBuilder().setComponents(button)],
      });

  },
};
