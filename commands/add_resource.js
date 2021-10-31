const {
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const setLevelSelection = async (dmChannel) => {
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("level")
      .setPlaceholder("Select level")
      .addOptions([
        {
          label: "Beginner",
          value: "beginner",
        },
        {
          label: "Intermediate",
          value: "intermediate",
        },
        {
          label: "Advanced",
          value: "advanced",
        },
      ])
  );
  await dmChannel.send({
    content: "Select resource level",
    components: [row],
  });
};

const setMediaTypeSelection = async (dmChannel) => {
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("mediaType")
      .setPlaceholder("Select media type")
      .addOptions([
        {
          label: "Video",
          value: "video",
        },
        {
          label: "Text",
          value: "text",
        },
        {
          label: "Free Course",
          value: "free_course",
        },
        {
          label: "Paid Course",
          value: "paid_course",
        },
      ])
  );
  await dmChannel.send({
    content: "Select resource level",
    components: [row],
  });
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add_resources")
    .setDescription("Starts the process of adding a resource"),
  async execute(interaction) {
    const dmChannel = await interaction.user.createDM();
    await dmChannel.sendTyping();
    await dmChannel.send("Tell me about the resource");

    await setLevelSelection(dmChannel);

    const collector = dmChannel.createMessageComponentCollector({
      time: 10_000,
    });

    collector.on("collect", async (i) => {
      console.log(i)
      if (i.customId === 'level') {
        setMediaTypeSelection(dmChannel);
      } else if (i.customId === 'mediaType') {
        setMediaTypeSelection(dmChannel);
      }
    });

    collector.on("end", (collected) => {
        console.log(`Collected ${collected.size} items`)
        console.log(collected)
      }
    );

    const mcollector = dmChannel.createMessageCollector({
      time: 10_000,
    });
    mcollector.on("collect", (m) =>
      console.log(`Collected mcollector ${m.content}`)
    );

    mcollector.on("end", (collected) => {
        console.log(`Collected mcollector ${collected.size} items`)
        console.log(collected)
      }
    );
  },
};
