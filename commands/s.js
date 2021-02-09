module.exports = {
	name: 's',
	description: 'Make BlackGrim97 to Survival Mode',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
        const cmd = `gamemode s BlackGrim97`
        const response = await api.sendConsoleCommand(serverid, cmd);
        const profile = JSON.parse(response);
        message.channel.send("Does it work? = " + profile.success + ` ${message.author}`);
	},
};