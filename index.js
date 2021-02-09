const Discord = require('discord.js');
const { resolve } = require('path');
const fs = require('fs');
const client = new Discord.Client();
const { prefix, serverid, token, url, user, key } = require('./config.json');

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
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
        
    };

    if (command === 'test') {
        client.commands.get('test').execute(client, message, args, api);
    };
    
    if (command === 'info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        var gamemode = 'c';
        for (gamemode in args)
        {
            console.log("true");
            message.channel.send(`reeeeee`);
            break
        }
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    };

    if (command === 'gamemode') {
        client.commands.get('gamemode').execute(client, message, args, api);
    };

    if (command === 's') {
        client.commands.get('s').execute(client, message, args, api);
    };

    if (command === 'mc') {
        client.commands.get('mc').execute(client, message, args, api);
    };

    if (command === 'weather') {
        client.commands.get('weather').execute(client, message, args, api);
    };

    if (command === 'exit') {
        client.commands.get('exit').execute(message);
    };
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.login(token);