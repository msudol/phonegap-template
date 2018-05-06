/* App object */
var app = {
    
    /* first run after DOM Ready */
    initialize: function() {
        /* Added following line to demonstrate merges. */
        $('#appFullName').html(platformConstants.appFullName);
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/* JQuery DOM READY */
$(function() {

    app.initialize();

});