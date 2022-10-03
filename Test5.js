/**
 * Le Dom se défini comme étant une interface créér lors du changement d'une page
 * web nous permettant via des script d'accèder au contenu html et css d'une page
 * enfin de le modifié de facon dynamique.
 * la librairie simplifie énormement l'utilisation du DOM en utilisant les selecteurs
 *  css
 * Les getters et setters existe également en JQuery par convention les méthodes
 * de type getters commence par le prefix get et setters commence par le prefix set
 * le Js posséde les méthodes getAttributes et setAttributes pour accèder à un contenu
 * html jquery simplifie l'utilisation de ces fonctions car certaine fonction joue
 * le rôle de getter et setter en même temps
 * 
 */
$(document).ready(function(){
    //On récupére la taille de notre titre H1
    $("h1").css('font-size','50px');
    var taille=$("h1").css('font-size');
    //On affiche ensuite la valeur récupérée
    $("#test").text(taille);
    //text(): peut aussi etre utilisé comme getter et setter.

    var titre=$('h1').html();
    $('h1').html('<mark>DOM HTML</mark> manipulé');
    /**
     * La méthode text() ne va retenir que le contenu HTML et va ignoré les valises 
     * html et donc ne les interprete pas. on ne pas utiliser text() pour les
     * éléments de formulaire mais val() à la place et les valeurs vont bien 
     * être interprété en utilisant la méthode html()
     * val() peut aussi s'utiliser en tant que setter.
     * on va pouvoir utiliser attr() en tant que getter pour pouvoir récupéré la valeur
     * de l'attribut d'un élèment et cette méthode va prendre en argument le nom de l'attribut.
     * dans le cadre ou on l'applique a tout les éléments p par exemple ayant un attribut
     * précis elle ne l'appliquera que au premier élèment. 
     * on peut aussi utiliser attr() comme setter en modifiant la valeur d'un attribut
     * existant par exemple.
     */
    $("#test").html(titre);
    $('#prenom').keyup(function(){
        var valeurInput= $(this).val();
        $('#sp1').text(valeurInput);
    });
    $('select').change(function(){
        var valeurSelect= $('select').val() || [];
        $('#sp2').text(valeurSelect.join(', '));
    });
    //On récupère la valeur de l'attribut class de h1
    var atth1= $('h1').attr('class');
    //On affiche cette valeur dans notre span
    $('#test1').text('Valeur de class de h1: '+atth1);
    //On modifie la valeur associée à l'attribut class de h2
    $('h2').attr('class','titre');
    /**
     * On définit 2 attributs href et target pour a et on leur attribue des
     * valeurs
     */
    $('a').attr({
        href:'Test6.html',
        target:'_blank'
    });
    $('#c').change(function(){
        var v= $(this);
        $('#c1').html('Valeur attribut: '+v.attr('checked')+'<br>Valeur propriété: '+v.prop('checked'));
    });
    /**
     * La dernière méthode que nous allons voir c'est la méthode prop() pour manipulé
     * les pptés du DOM depuis la version 1.6 on ne fesait pas de différence entre un attribut
     * et une ppté du DOM. première des choses à comprendre c'est que certain attribut peuvent
     * changé dynammiquement de valeur alors que d'autre pas. par exemple lorsqu'on passe en argument
     * l'attribut class la valeur est fixe tant dis que lorsqu'on passe un check la valeur de 
     * l'argument peut changer selon que l'élément soit effectivement cocher ou pas.
     * selon W3C check est booleen la valeur de check va être différente de la ppté check
     * qui va pouvoir prendre la valeur true ou false reternons également que la valeur de 
     * l'attribut check ne va jamais changé elle est fixe depuis la génération du DOM.
     * tandis que celle de la ppté check va changé
     * on va utilisé check pour tout les attribut dont la valeur peut être changé comme:
     * check,selected ou encore value
     * 
     */

});


/**
 * jQuery Method Chaining

Until now we have been writing jQuery statements one at a time (one after the other).

However, there is a technique called chaining, that allows us to run multiple jQuery commands, one after the other, on the same element(s).

Tip: This way, browsers do not have to find the same element(s) more than once.

To chain an action, you simply append the action to the previous action.

The following example chains together the css(), slideUp(), and slideDown() methods. The "p1" element first changes to red, then it slides up, and then it slides down:
Example
$("#p1").css("color", "red").slideUp(2000).slideDown(2000); 
 */
