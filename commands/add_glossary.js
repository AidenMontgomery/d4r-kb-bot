const {
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add_glossary_term")
    .setDescription("Starts the process of adding a glossary term"),
  async execute(interaction) {
    // await interaction.reply("Start adding glossary");
    // const collector = interaction.channel.createMessageComponentCollector({
    //   time: 15000,
    // });

    // collector.on("end", (collected) =>
    //   console.log(`Collected ${collected.size} items`)
    // );
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder("Nothing selected")
        .addOptions([
          {
            label: "Select me",
            description: "This is a description",
            value: "first_option",
          },
          {
            label: "You can select me too",
            description: "This is also a description",
            value: "second_option",
          },
        ])
    );

    await interaction.reply({ content: "Pong!", components: [row] });
  },
};
