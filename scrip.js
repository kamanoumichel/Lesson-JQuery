/*$("p").hide();
$(".hey").hide();*/
$(document).ready(function(){
    $(".cli").click(function(){
        $("p").hide();
    })
});
$(document).ready(function(){
    $("#test").dblclick(function(){
        $("#test").hide();
    });
});
$(document).ready(function(){
    $("#p2").hover(function(){
        $("#p2").hide();
    });
});
/*$("#p1").mouseenter(function(){
    alert("You entered p1!");
  });
*/
$(document).ready(function(){
    /*$("#p11").hover(function(){
        alert("You entered p1!");
      },
      function(){
        alert("Bye! You now leave p1!");
      });*/
}
);
$(document).ready(
    function(){
        $("input").focus(function(){
            $(this).css("background-color","#F0F8FF");
        });
    }
);
$(document).ready(function(){
    $(".po").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });
});
$(document).ready(function(){
    $("#hide").click(function(){
        $("#hide").hide();
      });
      
      $("#show").click(function(){
        $("#hide").show();
      }); 
});
$(function(){
    $("#togb").click(
        function(){
            $("#tog").toggle();
          }
    );
});
//La fonction fade() permet de masquer ou de demasquer la visibilité
//d'un element du DOM
/**
 * $(selector).fadeIn(speed,callback);
 * method is used to fade in a hidden element.
 * $(selector).fadeOut(speed,callback);
 * method is used to fade out a visible element
 * $(selector).fadeToggle(speed,callback);
 * method toggles between the fadeIn and fadeOut methods
 * fadeTo() method allows fading to given opacity (value between 0 and 1).
 * syntax:$(selector).fadeTo(speed,opacity,callback);
 * 
 */
$(document).ready(function(){
    $("#but1").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});
/**
 * 
 * Les méthodes fade servent à créer des effets fondu genre apprition et disparution
 * 
 * Syntax
 * $(selector).hide(speed,callback);
 * $(selector).show(speed,callback);
 * $(selector).toggle(speed,callback);
 * values of speed is: fast,slow and milliseconds
 * callback is a function executed after the hide or sow function
 * on peut chainer les methodes en jquery comme suite:
 * $(sel).methode1().methode2().methode3()....;  
 */
/**
 * $("*""):select all element
 * $(this): select a current element
 * $("p:first"): select the first p element
 * $("ul li:first") 	Selects the first <li> element of the first <ul>
 * $("ul li:first-child") 	Selects the first <li> element of every <ul>
 * $("[href]") 	Selects all elements with an href attribute
 * $("a[target='_blank']") 	Selects all <a> elements with a target attribute value equal to "_blank"
 * $("a[target!='_blank']") 	Selects all <a> elements with a target attribute value NOT equal to "_blank" 	
$(":button") Selects all <button> elements and <input> elements of type="button" 	
$("tr:even") 	Selects all even <tr> elements 	
$("tr:odd") 	Selects all odd <tr> elements
 */
/*
*Mouse Events 	Keyboard Events 	Form Events 	Document/Window Events
click 	        keypress 	        submit 	            load
dblclick 	    keydown 	        change 	            resize
mouseenter 	    keyup 	            focus 	            scroll
mouseleave 	  	                    blur 	            unload
*/

/**
 * Event:
 * .click();
 * $(document).ready() method allows us to execute a function when 
 * the document is fully loaded.
 * This event is already explained in the jQuery Syntax chapter.
 */

/**
 * syntaxe js pour le chargement d'une page
 * window.addEventListener('load',monScript);
 * 
 * function monScript(){
 * 
 * }
 * d'ou le $(document).ready(function(){});==$(function(){});
 * 
 * The jQuery animate(): method is used to create custom animations
 * syntaxe: $(selector).animate({params},speed,callback);
 * the required params parameter defines the CSS properties to be animated.
 * the option speed is the same like the other method.
 * 
 */