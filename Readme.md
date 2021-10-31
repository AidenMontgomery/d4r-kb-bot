# d4r-kb-bot
## Description
This bot should help people add resources and glossary items to the D_D knowledge base.

## Prerequisite
A bot is required for this code to operate, create one by following the instructions on the [discord.js guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

Once the bot is created have it join your server following the instructions on the [discord.js guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)

**When creating the invite link make sure to select the `bot` and `applications.commands` options**

## Environmentvariables

The secrets for the bot are controlled using environment variables. During development duplicate the `example.env` file and rename it to `.env`.

Fill in the following variables

|Variable||
|-|-|
|DISCORD_APPLICATION_ID|Copy the Application ID from the General Information tab of your discord application|
|DISCORD_BOT_TOKEN|Copy the token from the Bot tab of your discord application|
|DISCORD_GUILD_ID|Server ID from discord|

# Install dependencies

The [discord.js](https://discord.js.org) version being used requires a minimum of [Node.js](nodejs.org) of **16.6.0**

Install the NPM dependencies with `npm install`

## Registering slash commands
Once the dependencies are install and the environment variables are configured, the slash commands need to be registered with the server.

`node deploy-commands.js`

Once this exits run the bot with either `nodemon index.js` or `node index.js`

## Interacting with the bot
Now that the slash commands are registered and the bot is running type `/add` into any channel that the bot is in.
