// test.js

var dataAdapter = require("./dataAdapter");

speechOutput = dataAdapter.fetchHikesNearMe((result) => {
    console.log(result)
});