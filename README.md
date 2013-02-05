##About

Pearson's eyewitness api [details here](http://developer.pearson.com/api/eyewitness-guides/apimethod/entries-guide/189/overview)

## Installation

```bash
$ npm install eyewitness
```

## Usage

### Guide

Searches the Eyewitness Guides for information based on the search criteria, returning the results in the requested format.

    var params = {
      	  q: 'queen'
    		, apikey: 'Your Key'
    	};
  
  	var guidebook = 'london'
  
  
  	eyewitness.guide(params, guidebook ,function (err, data) {
  		if(err){
  			console.log('-> testGuide ERROR');
  		}
  		else {
  			console.log('-> testGuide OK');
  		};
  	});


### Guide With Filters

Searches the Eyewitness Guides for information based on the search criteria with additional filters, returning the results in the requested format. This is the same API as Search for Entries, with additional parameters

    var params = {
    		  q: 'queen'
    		, category: 'Restaurants'
    		, entry_type: 'chapters'
    		, apikey: 'Your Key'
    	};
    
    var guidebook = 'london'
    
    eyewitness.guideWithFilter(params, guidebook, function (err, data) {
    		if(err){
    			console.log('-> testGuideWithFilter ERROR');
    		}
    		else {
    			console.log('-> testGuideWithFilter OK');
    		}
    	});
    

### Guide Categories

Lists the categories of entries available in the Eyewitness Guides, returning a list in the requested format.

    var params = {
    	apikey: 'Your Key'
    };
    
    var guidebook = 'london'
    
    eyewitness.guideCategories(params, guidebook, function (err, data) {
    	if(err){
    		console.log('-> testGuideCategories ERROR');
    	}
    	else {
    		console.log('-> testGuideCategories OK');
    	}
    });


### Guide Entries in Categories

Lists the entries for a specified category from the Eyewitness Guides, returning a list in the requested format. If you need to find entries in multiple categories, use the more powerful List Entries with Filters

    var params = {
    	apikey: 'Your Key'
    };
    
    	var categoryName = 'Museums'
    	var guidebook = 'london'
    
    eyewitness.guideEntriesInCategories(params, guidebook, categoryName, function (err, data) {
    	if(err){
    		console.log('-> testGuideEntriesCategories ERROR');
    	}
    	else {
    		console.log('-> testGuideEntriesCategories OK');
    	}
    });

### Geosearch for Entries

Searches the Eyewitness Guides for information based on a given geolocation. The nearest 25 matches are returned, in the requested format.

    var params = {
    	  lon: '0.1062'
    	, lat: '52.5171'
    	, apikey: 'Your Key'
    };
    
    	var guidebook = 'london'
    
    eyewitness.geosearchForEntries(params, guidebook, function (err, data) {
    	if(err){
    		console.log('-> testGeosearchEntries ERROR');
    	}
    	else {
    		console.log('-> testGeosearchEntries OK');
    	}
    });

### Geosearch for Entries with Filters

Searches the Eyewitness Guides for information based on a given geolocation and additional filters. The nearest 25 matches are returned, in the requested format.

    var params = {
    	  lon: '0.1062'
    	, lat: '51.5171'  
    	, apikey: 'Your Key'
    	, category: 'Pubs_And_Bars'
    };
    
    var guidebook = 'london'
    
    eyewitness.geosearchForEntriesWithFilters(params, guidebook, function (err, data) {
    	if(err){
    		console.log('-> testGeosearchFilters ERROR');
    	}
    	else {
    		console.log('-> testGeosearchFilters OK');
    	}
    });

### Entry from Guide

Retrieves a specific entry from the Eyewitness Guides, returning the results in the requested format.

    var params = {
    	apikey: 'Your Key'
    };
    
    var entryId = 'EWTG_LONDON168STGIL_002'
    var guidebook = 'london'
    
    eyewitness.entryFromGuide(params, guidebook, entryId, function (err, data) {
    	if(err){
    		console.log('-> testEntryGuide ERROR');
    	}
    	else {
    		console.log('-> testEntryGuide OK');
    	}
    });
