module.exports = {
	name: 'restart',
	description: 'Restart the server',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
		const response = await api.restartServer(serverid);
		const profile = JSON.parse(response);
        console.log("Restarting The MC Server" + profile);
        message.channel.send("Success");
	},
};