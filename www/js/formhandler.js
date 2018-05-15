// need to make sure jquery is loaded and the DOM
$(function() {

    // we're using event delegation to query ajax loaded content with #app_main.on     

    // form-signin - login.html 
    $("#app_main_content").on("submit", '#form-signin', function(event) { 
        event.preventDefault();
        console.log("form submit");
        
        //TODO: replace this manual choice with one set in a data attribute on the form
        pageMan.loadPage("welcome");
        
        // will this help turn off the system ui in android that sometimes gets stuck on login?
        AndroidFullScreen.immersiveMode();
    });
   
});