const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
require("dotenv").config();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const handleInteraction = async (interaction, command) => {
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
};

client.on("interactionCreate", async (interaction) => {
  let command
  if (interaction.isButton()) {
    command = client.commands.get(interaction.customId);
  } else if (interaction.isCommand()) {
    command = client.commands.get(interaction.commandName);
  } else if (interaction.isSelectMenu()) {
    console.log('THIS IS A SELECT MENU');
  }

  if (!command) return;
  await handleInteraction(interaction, command);
});

client.on('messageCreate', async (message) => {
  console.log(message);
})

client.login(process.env["DISCORD_BOT_TOKEN"]);
