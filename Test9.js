/**
 * Gestion Des Dimensions En js
 * on peut utiliser with() et height() comme largeur et hauteur des éléments en tant que
 * getter par exemple 
 */
$(document).ready(function(){
    /*var l1= $('p').width();
    var h1= $('p').height();*/

    /*var l= $('#p1').innerWidth();
    var h= $('#p1').innerHeight();
    $('#sp1').text('la Taille de p avec (Padding) est:'+h+'*'+l+'px');*/
    //cette fois ci utilisons with() et haight() comme setter
    var l= $('#p1').outerWidth();
    var h= $('#p1').outerHeight();

    var lt= $('#p1').outerWidth(true);
    var ht= $('#p1').outerHeight(true);

    $('#sp1').html('Outer taille: '+h+'*'+l+'px<br>'+'Outer taille (totale): '+ht+'*'+lt+'px');

    $('#bb1').click(function(){
        $('#p1').width('300px');
        $('#p1').height('100px');

        $('#p2').width('300px');
        $('#p2').height('100px');

        var l2= $('#p1').width();
        var h2= $('#p1').height();

        var l3= $('#p2').width();
        var h3= $('#p2').height();
        $('#sp2').text('Les nouvelles tailles sont: '+h2+'*'+l2+'px');
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
    /**
     *  $("#div1").width(500).height(500);
     * Innerwith() et Innerheight() sont des méthodes qui vont permettre de récupéré
     * la largeur de l'élément et la hauteur de l'élément avec leur padding on utilisera
     * plus ces méthodes comme getter mais on peut aussi les utilisés comme setter mais cela
     * n'a pas une importance en soit.
     * 
     * AJAX is the art of exchanging data with a server, 
     * and updating parts of a web page - without reloading the whole page.
     * AJAX = Asynchronous JavaScript and XML.
     * 
     * In short; AJAX is about loading data in the 
     * background and display it on the webpage, without reloading the whole page.
     * 
     * Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs.
     * 
     * 
     * =================================================================================
     * NB:Writing regular AJAX code can be a bit tricky, because different browsers 
     * have different syntax for AJAX implementation. This means that you will have 
     * to write extra code to test for different browsers. However, the jQuery team 
     * has taken care of this for us, so that we can write AJAX functionality with 
     * only one single line of code.
     * =================================================================================
     * The jQuery load() method is a simple, but powerful AJAX method.
     * The load() method loads data from a server and puts the returned data into the selected element.
     * syntaxe:$(selector).load(URL,data,callback);
     * The optional data parameter specifies a set 
     * of querystring key/value pairs to send along with the request.
     * 
     * The optional callback parameter specifies a callback function to run 
     * when the load() method is completed. The callback function can have 
     * different parameters:
     *      responseTxt - contains the resulting content if the call succeeds
     *      statusTxt - contains the status of the call
     *      xhr - contains the XMLHttpRequest object
     */
    //$('#sp2').text(h1);
    //$("#div1").load("Test.txt");
     //$('#div1 #p1').load('Test.txt');
    /*$("button").click(function(){
        $("#div1").load("Test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success")
            alert("External content loaded successfully!");
          if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      });*/
      /*$("button").click(function(){
        $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });*/
      $("button").click(function(){
        $.post("demo_test_post.asp",
        {
          //???????
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });
      /**
       * ===================================================================
       * Let's talk about get() and post() jQuery Ajax méthode:
       * ===================================================================
       * The Jquery get() and post() methods are used to request data form server
       * with an HTTP GET or POST request.
       * Get - Resquests data from a specified resource
       * whereas POST- Submits data to be processed to a specified resource.
       * 
       * The $.get() method requests data from the server with an HTTP GET request.
       * Syntaxe: $.get(URL,callback);
       * 
       * exemple:
       * $("button").click(function(){
       * $.get("demo_test.asp", function(data, status){
       * alert("Data: " + data + "\nStatus: " + status);
       * });
       * });
       * 
       * The $.post() method requests data form the server using an HTTP POST request.
       * Syntax: $.post(URL,data,callback);
       * The optional data parameter specifies some data to send along with the request.
       * 
       * 
       * The noConflict() method releases the hold on the $ shortcut identifier, so that other
       * scripts can use it. You can of course still use jQuery, simply by writing the full name
       * instead of the shortcut:
       * example:
       *    $.noConflict();
       *    jQuery(document).ready(function(){
       *    jQuery("button").click(function(){
       *    jQuery("p").text("jQuery is still working!");
       *    });
       * });
       * 
       * 
       */
});