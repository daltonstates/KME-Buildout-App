'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var WP = require('wordpress-rest-api');
// You must authenticate to be able to POST (create) a post 
var wp = new WP({
    endpoint: 'http://www.kmesiteredesign.com.php7-29.phx1-1.websitetestlink.com/wp-json',
    // This assumes you are using basic auth, as described further below 
    username: 'newkmeadmin',
    password: 'SG3Ex5qagg7iIxS'
});
function CreatePost(titleText, contentText, statusType) {
    wp.posts().create({
        // "title" and "content" are the only required properties 
        title: titieText,
        content: contentText,
        // Post will be created as a draft by default if a specific "status" 
        // is not specified 
        status: statusType
    }).then(function (response) {
        // "response" will hold all properties of your newly-created post, 
        // including the unique `id` the post was assigned on creation 
        console.log(response.id);
    });
}
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n\nCreated By Dalton States | 3/5/2018 ' + replaceShortcode(WP,"Dalton","States"));
}).listen(port);
///


function replaceShortcode(text, shortcode, newText){
    var output = text.replace(shortcode, newText);
    return output;
}