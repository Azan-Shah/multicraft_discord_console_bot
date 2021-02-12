module.exports = {
	name: 'exit',
	description: 'Shutting Down Bot',
	execute (message)  {
        message.channel.send('Bot going to shutdown');
        process.exit();
	},
};