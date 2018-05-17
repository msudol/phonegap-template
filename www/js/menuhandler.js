/* pageman.js - Page manager
*
* Page manager will track the session, page history, what pages are next within the app.
*/

var menuHandler = {
    
    loadMenu: function (menu) {
        
        if (menu == "empty") {
            $("#app_main_header").hide();
        }
        else {
            $("#app_main_header").show();
            $("#app_main_header").load("menu/" + app.lang + "/" + menu + ".html", function () {
                // inspect the page and setup any data- values
                menuHandler.inspectMenu(menu);
            });
        }

    },
    
    inspectMenu: function (menu) {
        
        console.log("Loading menu: menu/" + app.lang + "/" + menu + ".html");

        var el = $("#app_main_header");
        var page = $("#app_main_content");
        
        // collapse any uncollapsed navbar
        $('#navbarCollapse').collapse('hide');

        // get the data-title attribute of the page div
        var title = page.find(".app_page").data("title");
        
        // get the data-nav attribute of the page div
        var nav = page.find(".app_page").data("nav");
                
        // set page titles
        console.log("Current page title: " + title);
        $("#page_title").html(title);
        
        // set visibilities
        console.log("Navigation is: " + nav);
        $("#app_nav").css('visibility', nav);
        $("#page_title").css('visibility', nav);        
        
    }
    
};


// need to make sure jquery is loaded and the DOM
$(function() {

    // we're using event delegation to query ajax loaded content with #app_main.on     

    // 
    $("#app_main_header").on("click", '.menuItem', function(event) { 
               
        event.preventDefault();
                        
        console.log("Menu link to " + $(this).data("page"));
        
        pageMan.loadPage($(this).data("page"));
        
    });

    
});