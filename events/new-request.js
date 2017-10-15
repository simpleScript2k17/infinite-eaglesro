module.exports = client => {
	  let administratie = client.channels.find('name', 'administratie');
	if(message.channel.name === "cereri-grad"){
		message.channel.find(administratie).send("Inca o cerere grad, uitati-va **INACTIVILOR** @everyone")
	}
};