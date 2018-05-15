/*
* appcb.js - App Callbacks
*
* Use the data-callback attribute on a page to fire a callback from here.. 
* The framework will try to run appcb["function_name"] in the callback. 
* As of right now, the callback system does not take arguments.
* 
*/
var appcb = {};

// sample callback when a page loads
appcb.test = function () {
    console.log("testing page load callback");
};

// Example callback from the welcome page
appcb.welcome = function() {
    $("#welcome_page_callback").html("This text was loaded into the page from a data-callback function");
};