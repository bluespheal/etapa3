var Boarder = function( ){

  function initialize() {
    $("#master").css("visibility", "hidden");

  };

  initialize();


  $("#new_board").click(function(event) {
     $( "#add_tab" ).on( "click", function() {
        dialog.dialog( "open" );
      });
    // $("#master_board").append(new Board("#board"));
  });

};

var Board = function( selector ) {

  $("#master_board").append('<div id="board"><div id="master" class="post-it"><div class="header"><div class="close">X</div></div><div class="content">...</div></div><div/>');


  $("#board").dblclick(function() {
    $(this).append(new PostIt);
  });
};

var PostIt = function() {

  $("#board").append('<div id="master" class="post-it"><div class="header"><div class="close">X</div></div><div class="content">...</div></div>');
  $(".post-it:last-child").css ({"left": event.pageX, "top": event.pageY});
  $(".content").attr('contenteditable', "true");
  $(".header").attr('contenteditable', "true");

  
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
  new Boarder();
});
