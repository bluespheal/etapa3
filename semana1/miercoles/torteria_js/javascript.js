$( document ).ready(function() {
  $(".create-oven").on("click", function(event){
    event.preventDefault();
    $(this).hide();
    $(".oven").css("visibility", "visible");
    Oven();
    $(".form").on("submit", function(event){
      event.preventDefault();
      var tipo = $("#tipo").val();
      var tiempo = $("#tiempo").val();     
      var torta = new Torta(tipo, tiempo);
      torta.cook();
      batch = setInterval(function(){ torta.cook()}, 1000);
    });
  });
});

function Torta(tipo, tiempo){
  var timer = tiempo;
  var real_timer = 0;
  this.tipo = Tipo(tipo);

  this.cook = function(){
    
    if (real_timer < this.tipo) { 
    this.estado = "crudo";
    $("#timer").removeClass();
    $("#timer").addClass("CRUDO");
    }

    if (real_timer < this.tipo + 5) { 
    this.estado = "casi listo";
    $("#timer").removeClass();
    $("#timer").addClass("Casi-listo");
    }

    if (real_timer == this.tipo) { 
    this.estado = "listo";
    $("#timer").removeClass();
    $("#timer").addClass("LISTO");
    }

    if (real_timer > this.tipo) { 
    this.estado = "quemeado";
    $("#timer").removeClass();
    $("#timer").addClass("QUEMADO");
    }

    timer -= 1;
    real_timer +=1;

    if (timer <= 0) {
      $("#history").css("visibility", "visible");
      clearInterval(batch);

      $("#history").append('<li>'+ tipo +": "+ this.estado+'</li>');
    };

    $("#timer").html( timer + "\n" + this.estado );
  };
};


function Tipo(tipo){
  this.tipo = tipo;

  if (this.tipo == "milanesa"){
    return 10
  }
  if (this.tipo == "queso"){
    return 6
  }
  if (this.tipo == "jamon"){
    return 4
  }
}


function Oven(){
  var form = document.createElement("form");
  var tipo = document.createElement("input");
  var tiempo = document.createElement("input");
  var button = document.createElement("button");

  form.method = "POST";

  tipo.placeholder = "Tipo"
  tipo.name = "tipo"
  tipo.id = "tipo"
  form.appendChild(tipo)

  tiempo.placeholder = "Tiempo"
  tiempo.id = "tiempo"
  tiempo.name = "tiempo"
  form.appendChild(tiempo)

  var t = document.createTextNode("Cocinar")
  button.appendChild(t);
  form.appendChild(button);

  form.className = "form";
  document.getElementById("form").appendChild(form);

}
