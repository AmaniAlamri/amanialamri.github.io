console.log("Linked to js file correct");

var offX = false;//to make sure the player x is whom the first
var arrayOfeResult = [];//create array 
arrayOfeResult.length = 9; // 9 empty elements
var countClick = 0; // to count the number of clicks
var index = 0; // to get the id of clicked div and use it as index of arrayOfeResult
var tem = 0;// temporary storage to capture the id of clicked div
var winner = false; //used to check if there is a winner or not
var xScore = 0;//count the score of x player
var oScore = 0;//count the score of o player
var turn = $("#turn");//to assign turn of each player

var xo = $(".box").on("click", function(event) {//select clicked div 
  var target = $(event.target);
  tem = parseInt(target.attr("id")); //get the index of div to use it as an index with arrayOfResult
  index = tem;
  tem = 0;

  if (target.css("background-image") == "none") {//if div empty
    if (offX != true) {//if turn of player x 
      turn.text("O turn");//after palyer x played, the next turn is player o
      target.css({//display x image on the game board
        "background-image": "url('images/x.png')",
        "background-size": "contain"
      });
      offX = true; // to stop player x from play
      arrayOfeResult[index] = 1; //insert 1 to the array of result to represent x
      countClick++;//increase number of each click

    } else {// turn of O player
      turn.text("X turn");//display the next turn is x after o play
      target.css({//display image of o
        "background-image": "url('images/o.png')",
        "background-size": "contain"
      });

      offX = false; //to allow player x to play
      arrayOfeResult[index] = 0; ////insert 0 to array of result to represent 0
      countClick++;//increase number of each click
    }

    //play again state: empty every thing 
    $("#play").on("click", function() {
      $(".box").css("background-image", "none");
      arrayOfeResult = [];
      countClick = 0;
      offX = true; //turn to o
      index = 0;
      result = 0;
      winner = false;//there is no winner 
      turn.text("Start Game");
    });

    //....determine different path....
    if (countClick > 4) {
      // this means the player 1 reach the point 'click 5' that might consider as a win click

      // .....row path
      var path1 = arrayOfeResult[0] + arrayOfeResult[1] + arrayOfeResult[2];
      var path2 = arrayOfeResult[3] + arrayOfeResult[4] + arrayOfeResult[5];
      var path3 = arrayOfeResult[6] + arrayOfeResult[7] + arrayOfeResult[8];

      // .... column path
      var path4 = arrayOfeResult[0] + arrayOfeResult[3] + arrayOfeResult[6];
      var path5 = arrayOfeResult[1] + arrayOfeResult[4] + arrayOfeResult[7];
      var path6 = arrayOfeResult[2] + arrayOfeResult[5] + arrayOfeResult[8];

      // .... diagonal path
      var path7 = arrayOfeResult[0] + arrayOfeResult[4] + arrayOfeResult[8];
      var path8 = arrayOfeResult[2] + arrayOfeResult[4] + arrayOfeResult[6];

      for (var i = 1; i <= 8; i++) {
        var result = eval(`path${i}`); // trying to evaluates or executes an argument.
        //result is the value of path: 0,3,or NaN
        if (!isNaN(result)) {
          // 3 means x-winner , 0 means o-winner
          if (result == 3) {
            swal("Good job!", " X winner!", "success", {//display alert window
              button: "Aww yiss!"
            }).then(() => {
              finishRound();//call finish round function
            });
            winner = true;//there is winner now
            xScore++;//increase x score
            $("#xScore").text(xScore);//display x score 
            $("#play").removeClass("bounce");//remove animation from play again button
            break; //from loop
          }
          if (result == 0) {// o is winner
            stopPlay = true;
            swal("Good job!", "O winner!", "success", {//display alert window
              button: "Aww yiss!"
            }).then(() => {
              finishRound();//call finish round function
            });
            winner = true;//there is winner now
            oScore++;//increase o score
            $("#oScore").text(oScore);//display o score 
            $("#play").removeClass("bounce");
            break; //from loop
          }
        }
      }
      // ......... No winner..................
      if (countClick == 9 && winner != true) {
        swal({
          title: "Draw !!",
          text: "...Try agin!",
          icon: ""
        }).then(() => {
          finishRound();
        });
        $("#play").removeClass("bounce");
        // //-----------------------
      }
    } //close (if click>4)
  }
}); // close click function

// **......My challenges........**
// 1- link jq script file to html
// 2- switch between two players
// 3- track each player steps to determine winner
// 4- how to determine path of win and compare it with the progress of players
// 5- how to create an array that match user x,o seq correctly
// 6- how to move from div id to another div id
// 7- how to stop play on win case

//finish round state: empty every thing except scores of each players
function finishRound() {
  $("#play").addClass("bounce");
  arrayOfeResult = [];
  countClick = 0;
  offX = true; //turn to o
  index = 0;
  result = 0;
  winner = false;
  turn.text("Game Over");
}

//start new game
function reset() {
  document.location.href = "";
}
