var request = require('request');

module.exports = function(recipientId, message) {
	var messageData = {
		text: message
	};
	
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: recipientId },
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending message: ', error);
		} else if (response.body.error) {
			console.log('Error: ', response.body.error);
		}
	});
}