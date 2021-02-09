module.exports = {
	name: 'gamemode',
	description: 'Online Player Namelist',
	async execute (client, message, args, api)  {
		if (!args.length) 
        {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else
        {
        const cmd = `gamemode c ${args}`
        const response = await api.sendConsoleCommand(serverid, cmd);
        const profile = JSON.parse(response);
        message.channel.send("Does it work? = " + profile.success + ` ${message.author}`);
        }
	},
};