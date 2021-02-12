const { prefix } = require('../config');
module.exports = {
	name: 'help',
	description: 'help command',
	execute (message)  {
        const { commands } = message.client;
        message.channel.send('Here\'s a list of all my commands:');
        message.channel.send(commands.map(command => command.name).join(', '));
	},
};