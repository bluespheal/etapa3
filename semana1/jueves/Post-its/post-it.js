var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );
  var $tablero = $("#board");



  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
    $("#master").css("visibility", "hidden");
  };

  initialize();


  $tablero.dblclick(function() {
    $(this).append(new PostIt(".post-it"));
  });
};

var PostIt = function() {
  // Aquí va el código relacionado con un post-it

  $("#board").append('<div id="master" class="post-it"><div class="header"><div class="close">X</div></div><div class="content">...</div></div>');
  $(".post-it:last-child").css ({"left": event.pageX, "top": event.pageY});
  $(".header").attr('contenteditable', "true");
  $(".content").attr('contenteditable', "true");
  
  $(".close").mousedown(function() {
    $(this).parent().parent().remove();
  });
  
  $( function() {
    $( ".post-it" ).draggable({ handle: ".header" });
  });

  $(".post-it").mousedown(function(){
    $(this).parent().append($(this));
  });

  $(".post-it").dblclick(function(event) {
    event.stopPropagation();
  });

};

$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  new Board('#board');
});
