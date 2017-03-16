var Boarder = function( ){

  var title = $( "#board_title" );
  board_counter = 0;

  var dialog = $( "#dialog" ).dialog({   
    autoOpen: false,
    modal: true,
    buttons: {
      OK: function(){
        addBoard();
        $(this).dialog("close");
      },
      Cancel: function(){
        $(this).dialog("close");        
      }
    },
    close: function(){
      form[0].reset();
    }
  });

  var form = dialog.find( "form" ).on( "submit", function( event ) {
    addBoard();
    dialog.dialog( "close" );
    event.preventDefault();
  });

  var dialogo =  $("#new_board").on("click", function(){
      $("#dialog").dialog("open");
  });

  function initialize() {
    $("#master").css("visibility", "hidden");

  };

  function addBoard() {
    $("#boards_list").append("<li class = 'boarder_li' id= '"+ board_counter +"'> "+ title.val() +" </li>")
    $("#whiteboard").append(new Board("#board-"+ board_counter));
    board_counter++;
    $(".boarder_li").on("click",function(event){
      event.preventDefault();
      var iden= $(this).attr("id");
      $(".board").css("visibility","hidden");
      $("#board-"+iden).css("visibility","visible");
    });
  }

  initialize(); 
};

var Board = function( selector ) {

  $("#whiteboard").append('<div class= "board" id="board-'+board_counter+'"><div/>');


  $(selector).dblclick(function(event) {
    alert(selector+ "///"+ this);
    event.stopPropagation();
    $(this).append(new PostIt);
  });
};

var PostIt = function() {

  $(".board").append('<div id="master" class="post-it"><div class="header"><div class="close">X</div></div><div class="content">...</div></div>');
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


