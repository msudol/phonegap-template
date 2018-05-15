// need to make sure jquery is loaded and the DOM
$(function() {

    // we're using event delegation to query ajax loaded content with #app_main.on     

    // 
    $("#app_main_content").on("click", '.pager', function(event) { 
               
        event.preventDefault();
        
        //console.log("Pressed button " + this.id);
                
        console.log("page turn to " + $(this).data("page"));
        
        pageMan.loadPage($(this).data("page"));
        
    });

    
});