const { MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("add").setDescription("Add an item"),
  async execute(interaction) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("add_resources")
          .setLabel("Resource")
          .setStyle("PRIMARY")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("add_glossary_term")
          .setLabel("Glossary")
          .setStyle("PRIMARY")
      );

    await interaction.reply({ content: "Pong!", components: [row] });
  },
};
