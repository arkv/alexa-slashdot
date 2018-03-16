var rp = require('request');
var cheerio = require('cheerio');
var fs = require('fs')
var title = [];

rp("https://slashdot.org/", function(error, response, body) {
  var $ = cheerio.load(body);

  $('article.fhitem').each(function( index ) {
	title.push($(this).find('.story-title').text());
  });

 });

	title.forEach(function(e){
	fs.appendFileSync('sldot.txt', title[e] + '\n' + '\n')
	});	 

