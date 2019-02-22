const { Client } = require('discord.js-commando')
const path = require('path')


const client = new Client({
    commandPrefix: '!',
    owner: 'your id', // can be an array of ids like: owner: ["id", "id"]
    invite: 'your discord server',
})




client.registry
.registerDefaultTypes()
.registerGroups([
    ['misc', 'Misc'],
    ['moderation', 'Moderation']
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}(${client.user.id})`)
    client.user.setActivity('Tutorial bot.')
})

client.on('error', console.error)


client.login('your discord token')
