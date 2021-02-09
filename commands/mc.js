module.exports = {
	name: 'mc',
	description: 'Online Player Namelist',
	async execute (client, message, args, api)  {
		const serverid = client.serverid;
		const response = await api.getServerStatus(serverid, player_list = 10);
        const profile = JSON.parse(response);
        message.channel.send(profile.data.players[0].name); 
        // print online player name from {"success":true,"errors":[],"data":{"status":"online","onlinePlayers":"1","players":[{"ip":"","id":"6602796","name":"BlackGrim97"}],"maxPlayers":"50"}}
        // to BlackGrim97
	},
};