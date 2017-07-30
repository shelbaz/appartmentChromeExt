var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

function scrapePage(){

// The URL we will scrape from - in our example Anchorman 2.

    url = 'https://montreal.craigslist.ca/apa/6198258114.html';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

			var title, price, housingType, mapLattitude, mapLongitude, listingBody, phoneNumber, area;
            var json = { title : "", price : "", area : "",  housingType : "", mapLongitude : "", mapLattitude : "", listingBody : "", phoneNumber: "", imageList: ""};
        
            $('.postingtitletext').filter(function(){
        		var data = $(this);
        		price = data.children().first().text();            
        		housingType = data.children().first().next().text();
        		title = data.children().first().next().next().text();
        		area = data.children().first().next().next().next().text();
        		

        		json.title = title;
        		json.price = price;
        		json.housingType = housingType;
        		json.area = area;

    		})

            $('.userbody').filter(function(){
                var data = $(this);
                imageList = data.children().children().next().next().data();            
                listingBody = data.children().next().next().text();

                

                json.imageList = imageList;
                json.listingBody = listingBody;


            })

            $('.mapbox').filter(function(){
                var data = $(this);
                mapLattitude = data.children().attr('data-latitude');   
                mapLongitude = data.children().attr('data-longitude');        
                

                json.mapLattitude = mapLattitude;
                json.mapLongitude = mapLongitude;
            })


            console.log(JSON.stringify(json));
            

console.log('Magic happens on port 8081');


fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})


        }
    })
}

scrapePage();

