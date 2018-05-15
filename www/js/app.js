/* app.js - Main function
*
* The bulk of the app is controlled and run from app.js
*/


var app = {
    
    /* default language */
    lang: "en",
    
    /* var to check if deviceReady ever fired */
    deviceReady: false,
    
    /* first run after DOM Ready */
    initialize: function() {
        
        // load the login page
        pageMan.loadPage("login");    
    
        // bind events - listen for deviceready - this may fire too quickly and not have an element to write to
        this.bindEvents();
    },

    bindEvents: function() {        
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.deviceReady = true;
        app.receivedEvent('deviceready');
        app.ifDeviceReady();
        
        AndroidFullScreen.immersiveMode();
        qrman.initalize();
    },

    // call to question if deviceReady has fired yet.
    ifDeviceReady: function() {
        if (app.deviceReady) {
            // change the deviceready footer
            $('.listening').hide();
            $('.received').show();
        }
    },
    
    receivedEvent: function(id) {        
        console.log('Received Event: ' + id);
    }
    
};

/* JQuery DOM READY */
$(function() {

    // checks that device is ready and does some things.
    // this should probably take a success and error callback.
    app.initialize();
        
});