/* footerhanlder.js - Footer manager
*
* Footer manager will build the footer called for each page in the pages data-footer attribute.
* 
* Footers can call a data-callback also.
* 
*/

var footerHandler = {
    
    loadFooter: function (footer) {

        if (footer == "empty") {
            $("#app_main_footer").hide();
        }
        else {
            $("#app_main_footer").show();
            $("#app_main_footer").load("footer/" + app.lang + "/" + footer + ".html", function () {
                // inspect the page and setup any data- values
                footerHandler.inspectFooter(footer);
            });
        }

    },
    
    inspectFooter: function (footer) {
        
        console.log("Loading footer: footer/" + app.lang + "/" + footer + ".html");

        var el = $("#app_main_footer");
        
        // attempt to run an app.callback if it's set in the data
        var cb = el.find(".app_footer").data("callback");
        var fn = appcb[cb];   
        if(typeof fn === 'function') {
            console.log("Running footer callback: " + cb)
            fn();
        }        
        
        // hide any footer buttons that want to be hidden
        $(".app_footer .pager").each(function(i, obj) {
            var x = $(obj).data("hidden");
            //console.log(x);
            if (x === true) {
                //console.log("hide a button!");
                $(obj).css('visibility', "hidden");
            }
        });
    }
    
};


// need to make sure jquery is loaded and the DOM
$(function() {

    // we're using event delegation to query ajax loaded content with #app_main.on     

    $("#app_main_footer").on("click", '.pager', function(event) { 
               
        event.preventDefault();
                        
        console.log("Footer link to " + $(this).data("page"));
        
        pageMan.loadPage($(this).data("page"));
        
    });

    
});