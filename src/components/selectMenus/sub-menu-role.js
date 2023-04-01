module.exports = {
  data: {
    name: `sub-menu-role`,
  },
  async execute(interaction, client) {
    const c_role = interaction.values[0];

    if (interaction.member.roles.cache.has(c_role)) {
      await interaction.reply({
        ephemeral: true,
        content: `Role has been deleted`,
      });
      await interaction.member.roles.remove(c_role);
    } else {
      await interaction.reply({
        ephemeral: true,
        content: `Role has been added`,
      });
      await interaction.member.roles.add(c_role);
    }
  },
};
