const Discord = require('discord.js');
const { resolve } = require('path');
const fs = require('fs');
const client = new Discord.Client();
const { prefix, serverid, token, url, user, key, owner, status } = require('./config.js');


//for multicraft api call
const api = require("multicraft").begin({
    url: url,
    user: user,
    key: key
});

client.serverid = serverid;
//for multicraft api call

//for module export
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};
//for module export

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(status.name, { type: status.type});
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);  
    };
    if (command === 'help') {
        client.commands.get('help').execute(message, args);  
    };
    if (command === 'start') {
        if (message.member.roles.cache.some(role => role.id === '745968623570518041'))
        {
        client.commands.get('start').execute(client, message, args, api);
        }
        else
        {
            message.channel.send("Sorry You Don't Have The Permission To Use This Command");
        };
    };
    if (command === 'restart') {
        if (message.member.roles.cache.some(role => role.id === '745968623570518041'))
        {
        client.commands.get('restart').execute(client, message, args, api);
        }
        else
        {
            message.channel.send("Sorry You Don't Have The Permission To Use This Command");
        };
    };
    if (command === 'shutdown') {
        if (message.member.roles.cache.some(role => role.id === '745968623570518041'))
        {
        client.commands.get('shutdown').execute(client, message, args, api);
        }
        else
        {
            message.channel.send("Sorry You Don't Have The Permission To Use This Command");
        };
    };
    if (command === 'test') {
        if (message.member.roles.cache.some(role => role.id === '745968623570518041'))
        {
        client.commands.get('test').execute(client, message, args, api);
        }
        else
        {
            message.channel.send("Sorry You Don't Have The Permission To Use This Command");
        };
    };
    if (command === 'exit' && message.author.id === owner.id) {
        client.commands.get('exit').execute(message);
    };
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(token);

// impelent ban command with sql support? with monitor?