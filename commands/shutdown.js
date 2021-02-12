module.exports = {
	name: 'shutdown',
	description: 'Shutdown the server',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
		const response = await api.stopServer(serverid);
		const profile = JSON.parse(response);
        console.log("Shutdown The MC Server" + profile);
        message.channel.send("Success");
	},
};