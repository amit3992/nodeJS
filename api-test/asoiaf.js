const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var name = encodeURIComponent('Petyr Baelish');
const url = 'http://www.anapioficeandfire.com/api/characters/?name=';


var httpGet = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

var getCharacterByName = function(char_name) {
	var char_url = 'http://www.anapioficeandfire.com/api/characters/?name=' + char_name;
	console.log('URL: ' + char_url);
	return httpGet(char_url);
}

var data = getCharacterByName(name);
console.log(data);