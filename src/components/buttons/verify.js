module.exports = {
  data: {
    name: `verify`,
  },
  async execute(interaction, client) {
    const c_role = "1091568657718587502";
    // You are already verified
    if (interaction.member.roles.cache.has(c_role)) {
      await interaction.reply({
        ephemeral: true,
        content: `:red_circle:  You are already verified`,
      });
    } else {
      await interaction.member.roles.add(c_role);
      await interaction.reply({
        ephemeral: true,
        content: `:green_circle:  Verification was successful`,
      });
    }
  },
};
