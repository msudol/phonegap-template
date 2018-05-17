/* pageman.js - Page manager
*
* Page manager will track the session, page history, what pages are next within the app.
*/

var pageMan = {
    
    currentPage: "index",
    lastPage: null,
    
    loadPage: function (page) {
        
        // set the last page we were on
        pageMan.lastPage = pageMan.currentPage;
        
        $("#app_main_content").load("pages/" + app.lang + "/" + page + ".html", function () {

            // set the current page
            pageMan.currentPage = page;

            // inspect the page and setup any data- values
            pageMan.inspectPage(page);
        
        });

    },
    
    inspectPage: function (page) {

        var el = $("#app_main_content");
        
        // get the data-footer attribute of the page div
        var footer = el.find(".app_page").data("footer" || "empty");

        // get the data-menu attribute of the page div
        var menu = el.find(".app_page").data("menu") || "empty";

        // get the data-nav attribute of the page div
        var bg = el.find(".app_page").data("bg");

        // set page background
        console.log("Setting page background to: " + bg);
        $("body").css('background', bg);
        
        // set the footer if it exists
        if ((menu !== undefined) && (menu !== null)) {
            menuHandler.loadMenu(menu);
        }
                
        // set the footer if it exists
        if ((footer !== undefined) && (footer !== null)) {
            footerHandler.loadFooter(footer);
        }
        
        // attempt to run an app.callback if it's set in the data
        var cb = el.find(".app_page").data("callback");
        var fn = appcb[cb];   
        if(typeof fn === 'function') {
            console.log("Running page callback: " + cb)
            fn();
        } 
        
        console.log("Loading page: pages/" + app.lang + "/" + page + ".html");
    }
    
};