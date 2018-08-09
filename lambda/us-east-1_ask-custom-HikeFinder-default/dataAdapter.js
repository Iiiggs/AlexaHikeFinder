var unirest = require('unirest');

// someThings.js

(function() {
    var fetchHikesNearMe = function fetchHikesNearMe(callback){
// These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Kirkland&radius=25")
    .header("X-Mashape-Key", "Db0uKENirXmshjNTdXGt8s6ce40up1SMVRxjsnPDR0x3o1niDo")
    .header("Accept", "text/plain")
    .end(function (result) {
      result = "Found " + result.body.places.length + " hikes for you"
      callback(result);
    });
}

    module.exports.fetchHikesNearMe = function(callback) {
        // return fetchHikesNearMe();
        return fetchHikesNearMe(callback);
    }

}());
