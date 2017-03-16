$( function() {
    var cumulus = 0;
  $("#cardPile > #card").draggable({
    revert: "invalid",
    helper: "clone"
  });


  $("#cardSlots").droppable({
    accept: "#cardPile > #card",
    drop: function( event, ui ) {
        placeCard( ui.draggable );
    }
  });



  function placeCard($item){
    $("#cardSlots").append("<div>"+ $item.text() +"</div>");
    cumulus += Number(parseInt($item.text()));
    $("#total_sum").html(cumulus);
    if ($("#cardSlots > div").length >= 10){
      $("#cardSlots").droppable({ disabled: true});
    }
  }

});