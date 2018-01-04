//requires 'request' library
const request = require('request');
console.log(request);

//requires api key and search engine id
const keys = require('./env.js');



//stores url in variable


// creates function for retrieving search results
function get(movieTitle){
	var url = 'https://www.googleapis.com/customsearch/v1?key=' + keys.apiKey + '&cx=' + keys.engineId + '&q=' + movieTitle;
	request(url, function (error, response, body){
		// console.log('error up in here');
		var object = JSON.parse(body);
		console.log(object);
		var title = object.items[1].title;
		console.log(title);
	});
}

module.exports = get;



