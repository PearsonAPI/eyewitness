var sys = require('sys'),
	express = require('express'),
	assert = require('assert'),
	eyewitness = require('./eyewitness');

function testGuide() {

	var params = {
		  q: 'queen'
		, apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var guidebook = 'london'


	eyewitness.guide(params, guidebook ,function (err, data) {
		if(err){
			console.log('-> testGuide ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGuide OK');
		};
	});

}

function testGuideWithFilter() {

	var params = {
		  q: 'queen'
		, category: 'Restaurants'
		, entry_type: 'chapters'
		, apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var guidebook = 'london'

	eyewitness.guideWithFilter(params, guidebook, function (err, data) {
		if(err){
			console.log('-> testGuideWithFilter ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGuideWithFilter OK');
		}
	});
}

function testGuideCategories() {

	var params = {
		apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var guidebook = 'london'

	eyewitness.guideCategories(params, guidebook, function (err, data) {
		if(err){
			console.log('-> testGuideCategories ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGuideCategories OK');
		}
	});
}

function testGuideEntriesCategories() {

	var params = {
		apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var categoryName = 'Museums'
	var guidebook = 'london'

	eyewitness.guideEntriesInCategories(params, guidebook, categoryName, function (err, data) {
		if(err){
			console.log('-> testGuideEntriesCategories ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGuideEntriesCategories OK');
		}
	});

}


function testGeosearchEntries() {

	var params = {
		  lon: '0.1062'
		, lat: '52.5171'
		, apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var guidebook = 'london'

	eyewitness.geosearchForEntries(params, guidebook, function (err, data) {
		if(err){
			console.log('-> testGeosearchEntries ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGeosearchEntries OK');
		}
	});
}


function testGeosearchEntriesFilters() {

	var params = {
		  lon: '0.1062'
		, lat: '51.5171'  
		, apikey: 'bbf552a7120c10bde395bb05bf34ad47'
		, category: 'Pubs_And_Bars'
	};

	var guidebook = 'london'

	eyewitness.geosearchForEntriesWithFilters(params, guidebook, function (err, data) {
		if(err){
			console.log('-> testGeosearchFilters ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testGeosearchFilters OK');
		}
	});
}

function testEntryGuide() {

	var params = {
		apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var entryId = 'EWTG_LONDON168STGIL_002'
	var guidebook = 'london'

	eyewitness.entryFromGuide(params, guidebook, entryId, function (err, data) {
		if(err){
			console.log('-> testEntryGuide ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testEntryGuide OK');
		}
	});
}


function testMultimediaGuide() {

	var params = {
		apikey: 'bbf552a7120c10bde395bb05bf34ad47'
	};

	var item = ''
	var guidebook = 'london'

	eyewitness.multimediaFromGuide(params, guidebook, item, function (err, data) {
		if(err){
			console.log('-> testMultimediaGuide ERROR');
		}
		else {
			console.log(JSON.stringify(data, null, 4))
			console.log('-> testMultimediaGuide OK');
		}
	})
}


var express = require("express");
var app = express();


app.get('/', function (req, res) {

	testGuide();
	testGuideWithFilter();
	testGuideCategories();
	testGuideEntriesCategories();
	testGeosearchEntries();
	testGeosearchEntriesFilters();
	testEntryGuide();
	//testMultimediaGuide();


	res.send('Please check the console.');

});


app.listen(5000);