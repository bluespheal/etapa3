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

  function addBoard() {
    $("#boards_list").append("<li contenteditable='true' class = 'boarder_li' id= '"+ board_counter +"'> "+ title.val() +" </li>")
    $("#whiteboard").append(new Board("#board-"+ board_counter));
    board_counter++;
    $(".boarder_li").on("click",function(event){
      event.preventDefault();
      var iden= $(this).attr("id");
      $(".board").css("visibility","hidden");
      $("#board-"+iden).css("visibility","visible");

    });
  }

};

var Board = function( selector ) {

  $("#whiteboard").append('<div class= "board" id="board-'+board_counter+'" style= "background-color: #'+Math.floor(Math.random()*16777215).toString(16)+'; "><div/>');

  $(selector).dblclick(function(event) {
    event.stopPropagation();
    $(selector).append(new PostIt(selector));
  });
};

var PostIt = function( select) {
  // var random = Math.floor(Math.random()* (16777215-14540253 +1)+14540253);
  // var color = random.toString(16);
  // var headercolor = (random - 986895).toString(16);

  $(select).append('<div id="master" class="post-it"><div class="header"><div class="close">X</div></div> <div class="content"></div></div>');
  $(select+"> .post-it:last-child").css ({"left": event.pageX, "top": event.pageY});
  $(".content").attr('contenteditable', "true");
  $(".header").attr('contenteditable', "true");

  // $("#master:last-child > .content").attr('style', "background-color: #"+ color);
  // $("#master:last-child > .header").attr('style', "background-color: #"+ headercolor);


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


