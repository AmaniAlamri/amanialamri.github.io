console.log("Linked to js file correct");

var offX = false;
var arrayOfeResult = [];
arrayOfeResult.length = 9; //create array of 9 empty elements
var countClick = 0; // to count the number of clicks
var index = 0; // to get the id of clicked div and use it as index of arrayOfeResult
var tem = 0;
var winner; //used to check if there is a winner or not
var play;
var xScore = 0;
var oScore = 0;
var turn=$("#turn");
var test;
var xo = $(".box").on("click", function(event) {
  var target = $(event.target);
  tem = parseInt(target.attr("id")); //here I get the index of div to use it as an index with array result
  index = tem;
  tem = 0;


  if (target.css("background-image") == "none") {
    
    if (offX != true) {
      turn.text("O turn");
      target.css({
        "background-image": "url('images/x.png')",
        "background-size": "contain"
      });
      
      offX = true; // to stop player x
      //(target).off("click"); //to prevent player from click on already clicked div
      arrayOfeResult[index] = 1; //insert 1 to array of result to represent x
      countClick++;

      // turn of O player
    } else {
      turn.text("X turn");
      target.css({
        "background-image": "url('images/o.png')",
        "background-size": "contain"
      });
      
      offX = false; //to allow plater x
      //(target).off("click"); //to prevent player from click on already clicked div
      arrayOfeResult[index] = 0; ////insert 0 to array of result to represent 0
      countClick++;
    }

    $("#play").on("click", function() {
      $(".box").css("background-image", "none");
      arrayOfeResult = [];
      countClick = 0;
      offX = true; //turn to o
      index = 0;
      result = 0;
    });

    function finishRound() {
      $("#play").addClass("bounce");
      arrayOfeResult = [];
      countClick = 0;
      offX = true; //turn to o
      index = 0;
      result = 0;
    }

    //determine different path
    if (countClick > 4) {
      // this mean the player 1 reach the point 'click 5' that may consider as a win click

      // .....row path
      var path1 = arrayOfeResult[0] + arrayOfeResult[1] + arrayOfeResult[2];
      //console.log("path1" + path1);
      var path2 = arrayOfeResult[3] + arrayOfeResult[4] + arrayOfeResult[5];
      //console.log("path2" + path2);
      var path3 = arrayOfeResult[6] + arrayOfeResult[7] + arrayOfeResult[8];
      //console.log("path3" + path3);

      // .... column path
      var path4 = arrayOfeResult[0] + arrayOfeResult[3] + arrayOfeResult[6];
      //console.log("path4" + path4);
      var path5 = arrayOfeResult[1] + arrayOfeResult[4] + arrayOfeResult[7];
      //console.log("path5" + path5);
      var path6 = arrayOfeResult[2] + arrayOfeResult[5] + arrayOfeResult[8];
      //console.log("path6" + path6);

      // .... diagonal path
      var path7 = arrayOfeResult[0] + arrayOfeResult[4] + arrayOfeResult[8];
      //console.log("path7" + path7);
      var path8 = arrayOfeResult[2] + arrayOfeResult[4] + arrayOfeResult[6];
      //console.log("path8" + path8);

      for (var i = 1; i <= 8; i++) {
        var result = eval(`path${i}`); // trying to evaluates or executes an argument.
        //console.log(result+'I'm result '+ typeof s);

        if (!isNaN(result)) {
          if (result == 3) {
            console.log("x winner");
            swal("Good job!", " X winner!", "success", {
              button: "Aww yiss!"
            }).then(() => {
              finishRound();
            });
            winner = true;
            xScore++;
            $("#xScore").text(xScore);
            
            // finishRound();
            break; //from loop
          }
          if (result == 0) {
            stopPlay = true;
            console.log("o winner");
            swal("Good job!", "O winner!", "success", {
              button: "Aww yiss!"
            }).then(() => {
              finishRound();
            });
            winner = true;
            oScore++;
            $("#oScore").text(oScore);
            // finishRound();
            break; //from loop
          }
        }
      }
      // ..... No winner..................
      if (countClick == 9 && winner != true) {
        console.log($(".i"));
        $('.i').css("visibility","visible");
        swal("Draw !!", "...Try agin!", {});
        console.log("Draw !!");
        // //-----------------------
      }
    } //close (if click>4)
  }

}); // close click function

// var xo = $(".box").on("mouseenter", function (event) {
//   var target=$(event.target);
//   target.css("hidden","visible")
// });
// **......My challenges........**
// 1- link jq script file to html
// 2- switch between two players
// 3- track each player steps to determine winner
// 4- how to determine path of win and compare it with the progress of players
// 5- how to create an array that match user x,o seq correctly
// 6- how to move from div id to another div id
// 7- how to stop play on win case

//start new game
function reset() {
  document.location.href = "";
}
