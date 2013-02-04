var HTTPS = require('https'),
	QUERYSTRING = require('querystring'),
	URL = require('url');


var BASEURL = 'https://api.pearson.com/eyewitness/'
var format = 'json'

function getRequest(url, method, callback) {

	var parsedUrl = URL.parse(url, true ),
		request, result = "";

	if (parsedUrl.protocol == "https:" && !parsedUrl.port) {
		parsedUrl.port= 443;
	}

	if( parsedUrl.query === undefined) {
		parsedUrl.query= {};
	}


	request = HTTPS.request({
		host: parsedUrl.hostname,
		port: parsedUrl.port,
		path: parsedUrl.pathname + "?" + QUERYSTRING.stringify(parsedUrl.query),
		method: method
	}, function(res) {
		res.on('data', function(chunk) {
			result+= chunk;
		});

		res.on("end", function () {
			callback(res.statusCode, result);
		});
	});

	request.end();
}



function extractData(status, result, field, callback) {

	var json;

	if (status !== undefined && result !== undefined) {

		data = JSON.parse(result);

		callback(null, data);
	}

	else {
		err = JSON.pase(result);
		callback(err, null);
	}
}

//----------------------FIND-------------------



exports.guide = function(params, guidebook, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/block.json';

	url += '?' + QUERYSTRING.stringify(params);

	console.log(url)
	getRequest(url, method, function (status, result) {
		extractData(status, result, "guide", callback);
	});
};


exports.guideWithFilter = function(params, guidebook, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/block.json';

	url += '?' + QUERYSTRING.stringify(params);


	getRequest(url, method, function (status, result) {
		extractData(status, result, "guideWithFilter", callback);
	});
};


exports.guideCategories = function(params, guidebook, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/categories.json';

	url += '?' + QUERYSTRING.stringify(params);

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'guideCategories', callback);
	});

};


exports.guideEntriesInCategories = function(params, guidebook, categoryName, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/' + categoryName + '/block.json';


	url += '?' + QUERYSTRING.stringify(params);

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'guideEntriesInCategories', callback);
	})
};


//-------------------Geolocation------------------------



exports.geosearchForEntries = function(params, guidebook, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/block.json';


	url += '?' + QUERYSTRING.stringify(params);

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'geosearchForEntries', callback);
	})
};



exports.geosearchForEntriesWithFilters = function(params, guidebook, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/block.json';


	url += '?' + QUERYSTRING.stringify(params);

	console.log(url)

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'geosearchForEntriesWithFilters', callback);
	});
};




//------------------View------------------------



exports.entryFromGuide = function(params, guidebook, entryId, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/block/' + entryId + '.json';


	url += '?' + QUERYSTRING.stringify(params);

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'entryFromGuide', callback);
	});
};



exports.multimediaFromGuide = function(params, guidebook, item, callback) {
	var method = 'GET'
	var url = BASEURL + guidebook + '/multimedia/' + item;


	url += '/?' + QUERYSTRING.stringify(params);
	console.log(url)

	getRequest(url, method, function (status, result) {
		extractData(status, result, 'multimediaFromGuide', callback);
	});
};



