const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
  PermissionFlagsBits,
} = require("discord.js");

// 1091551100668235816  role 1
// 1091551186169114644  role 2
module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu-role")
    .setDescription("Return a select menu with roles")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu-role`)
      .setMinValues(0)
      .setMaxValues(1)
      .setPlaceholder(`Nothing Selected`)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Role 1`,
          value: `1091551100668235816`,
        }),
        new SelectMenuOptionBuilder({
          label: `Role 2`,
          value: `1091551186169114644`,
        })
      );
    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
