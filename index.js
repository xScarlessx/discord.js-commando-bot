const { Client } = require('discord.js-commando')
const path = require('path')


const client = new Client({
    commandPrefix: '!',
    owner: '256883010970976257',
    invite: 'https://discord.gg/Zbf66b',
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


client.login('NTQ4NTA5NzQwNzg3ODI2Njg5.D1Gr5w.fzoCyuFh5x7LvFj-XZSKTcr_UHk')