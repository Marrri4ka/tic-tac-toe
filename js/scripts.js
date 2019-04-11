

var player1Turn=true;

function checkwinner(){
  if($("#ex1").attr("src") === "img/x.jpg" && ($("#ex2").attr("src") === "img/x.jpg") && ($("#ex3").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
}

$(document).ready(function(){

  for(var i = 1; i<= 9; i++){
    $("#"+ i).click(function(){
      if(player1Turn){
  $("#ex" + this.id ).attr("src", "img/x.jpg");
  player1Turn = !player1Turn;
  checkwinner();
    }else{
  player1Turn = !player1Turn;
  $("#ex" + this.id ).attr ("src", "img/zero.png");
  // checkwinner();
    }

  });
}

});
