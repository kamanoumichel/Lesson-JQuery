/**
 * Le jquery va mettre à notre disposition principalement 4 méthode pour insérer et
 * supprimer les éléments à savoir: append(),prepend(),after() et before().
 * les méthodes append et prepend vont permettre d'ajouter du contenu à la fin ou au
 * début de l'élément selectionner ces deux méthodes vont prendre en argument un contenu
 * à ajouter ou pas.
 * ne pas confondre after() et before avec prepend() et append().
 * ==========================================================
 * supprimer du contenu html
 * ==========================================================
 * Pour supprimer du contenu html nous utiliserons principalement les méthodes
 * empty() et remove().
 * remove(): va permettre de supprimer un ou plusieurs éléments selectionné ainsi que
 * tout ces enfants.
 * la méthode empty(): ne va supprimer que les enfants d'un élément Html mais pas le 
 * parent à la différence de remove() on ne doit pas passe de selecteur css pour preciser
 * quel élément à supprimer.
 * ================================================================
 * supprimer un attribut en jQuery avec la méthode removeAttr();
 * 
 * 
 * Pour remplacer du contenu html en jQuery on peut utiliser les méthodes:
 * replacewith() ou encore replaceAll()
 * replacewith():va replamcer un element cibler par un nouveau contenu que l'on va passé
 * en argument de plus elle va retourné la liste des éléments qui ont étè supprimé liste
 * que l'on va pouvoir retourné dans une variable par exemple.
 */
$(document).ready(function(){
    $('#b1').click(function(){
        $('#mondiv').after('Text insérer avec la méthode after()');
        //avecAppend();
        //$('#p1').append('--Text insérer avec la méthode append()');
    });
    $('#b2').click(function(){
        $('#mondiv').before('Text insérer avec la méthode before()');
        //avecPrepend();
        //$('#p2').prepend('--Text insérer avec la méthode prepend()--');
    });
    $('#b3').click(function(){
        $('#mondiv').append('Text insérer avec la méthode append()');
    });
    function avecAppend(){
        //trois facon d'insérer du contenu Html:
        var t1='<p>Paragraphe créé en HTML</p>';
        var t2= $('<p></p>').text('Paragrape créé avec jQuery');
        var t3= document.createElement('p');
        t3.innerHTML='Paragraphe créé avec JavaScript';
        $('#mondiv').append(t1, t2, t3);
    }

    function avecPrepend(){
        //trois facon d'insérer du contenu Html:
        var t4='<p>Paragraphe créé en HTML</p>';
        var t5= $('<p></p>').text('Paragrape créé avec jQuery');
        var t6= document.createElement('p');
        t6.innerHTML='Paragraphe créé avec JavaScript';
        $('#mondiv').prepend(t4, t5, t6);
    }

    $('#b11').click(function(){
        $('div').remove('#div1');
    });
    $('#b22').click(function(){
        $('#div2').empty();
    });
    $('#t').click(function(){
        $('a').removeAttr('href');
    });
    //==================================================================================
    $('#b21').click(function(){
        var rpl=$('#p11').replaceWith('<h2>Un titre h2 par exemple</h2>');
        //$('#msg').text('Ancien text: ' +rpl.text());
    });
    $('#b222').click(function(){
        //$('#msg').text('Un text');
        $('<h2>Autre titre h2</h2>').replaceAll('#p22');
    });
/**
 * replaceAll() va fonctionner de manière similaire à replacewith() mais va produire des 
 * résultats différents cette fois ci on va spécifié le ou les éléments à remplacer en argument.
 * 
 */
//==============================================================================================
//Entourer du contenu en jQuery
//==============================================================================================
$('.toWrap').wrap('<div class="wrap"></div>');
$('.toWrapAll').wrapAll('<div class="wrapA"></div>');
$('.toWrapInner').wrapInner('<div class="wrapI"></div>');
//On va pouvoir déentourer un élément grâce à la méthode jQuery unwrap()
$('#b2222').click(function(){
    $('.toWrapAll').unwrap();
});
});