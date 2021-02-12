module.exports = {
	name: 'start',
	description: 'Start the server',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
		const response = await api.startServer(serverid);
		const profile = JSON.parse(response);
		console.log("Starting The MC Server" + profile);
        message.channel.send("Success");
	},
};