module.exports = {
	name: 'weather',
	description: 'Change Weather',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
		console.log(serverid);
		const response = await api.getServer(serverid);
		const profile = JSON.parse(response);
        message.channel.send(" Status = " + profile.success);
		message.channel.send(" IP " + profile.data.Server.ip);
	},
};