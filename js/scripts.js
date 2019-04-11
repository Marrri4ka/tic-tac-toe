

var player1Turn=true;

function checkwinner(){
  if($("#ex1").attr("src") === "img/x.jpg" && ($("#ex2").attr("src") === "img/x.jpg") && ($("#ex3").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }

  if($("#ex1").attr("src") === "img/x.jpg" && ($("#ex4").attr("src") === "img/x.jpg") && ($("#ex7").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
  if($("#ex2").attr("src") === "img/x.jpg" && ($("#ex5").attr("src") === "img/x.jpg") && ($("#ex8").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }

  if($("#ex4").attr("src") === "img/x.jpg" && ($("#ex5").attr("src") === "img/x.jpg") && ($("#ex6").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
  if($("#ex7").attr("src") === "img/x.jpg" && ($("#ex8").attr("src") === "img/x.jpg") && ($("#ex9").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
  if($("#ex3").attr("src") === "img/x.jpg" && ($("#ex6").attr("src") === "img/x.jpg") && ($("#ex9").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
  if($("#ex1").attr("src") === "img/x.jpg" && ($("#ex5").attr("src") === "img/x.jpg") && ($("#ex9").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }
  if($("#ex3").attr("src") === "img/x.jpg" && ($("#ex5").attr("src") === "img/x.jpg") && ($("#ex7").attr("src") === "img/x.jpg")){
    alert("You are the winner!")
  }

  // winnercheck for 0
  if($("#ex1").attr("src") === "img/zero.png" && ($("#ex2").attr("src") === "img/zero.png") && ($("#ex3").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }

  if($("#ex1").attr("src") === "img/zero.png" && ($("#ex4").attr("src") === "img/zero.png") && ($("#ex7").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }
  if($("#ex2").attr("src") === "img/zero.png" && ($("#ex5").attr("src") === "img/zero.png") && ($("#ex8").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }

  if($("#ex4").attr("src") === "img/zero.png" && ($("#ex5").attr("src") === "img/zero.png") && ($("#ex6").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }
  if($("#ex7").attr("src") === "img/zero.png" && ($("#ex8").attr("src") === "img/zero.png") && ($("#ex9").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }
  if($("#ex3").attr("src") === "img/zero.png" && ($("#ex6").attr("src") === "img/zero.png") && ($("#ex9").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }
  if($("#ex1").attr("src") === "img/zero.png" && ($("#ex5").attr("src") === "img/zero.png") && ($("#ex9").attr("src") === "img/zero.png")){
    alert("You are the winner!")
  }
  if($("#ex3").attr("src") === "img/zero.png" && ($("#ex5").attr("src") === "img/zero.png") && ($("#ex7").attr("src") === "img/zero.png")){
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
  checkwinner();
    }

  });
}

$("#play").click(function(){

$("#board").slideDown();
$("#select-figure").slideUp();
});

$("#restart").click(function(){
$("#select-figure").slideDown();
$("#board").slideUp();


});

});
