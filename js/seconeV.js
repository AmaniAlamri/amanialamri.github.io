console.log("Linked to js file correct");

var offx = false;
var offo = false;
var arrayOfesult = [];
arrayOfesult.length = 9;
var countClick = 0;
var index = 0;
var tem = 0;



var xo = $(".box").on('click', function (event) {
    //var clickedElem = event.target;
    // Check if the event.target matches some selector, and do things...
    // var playerX = $('input[name=x]:checked').val();
    // var playerO = $('input[name=o]').val();
    //console.log(playerX == 'xPlayer');

    if ((offx != true)) {
        $(event.target).css({ "background-image": "url('images/x.png')", "background-size": "contain" });
        offx = true;// to stop player x
        //offo=false;// to allow player o
        tem = parseInt($(event.target).attr("id"));//here I get the index of div to use it as an index with array result
        index = tem;
        tem = 0;
        console.log("index of " + index);
        console.log("type of index " + typeof index);

        $(event.target).off('click');//to prevent player from click on already clicked div
        arrayOfesult[index] = 1;//insert 1 to array of result to represent x 
        countClick++;
        console.log(arrayOfesult);

    }
    else {
        $(event.target).css({ "background-image": "url('images/o.png')", "background-size": "contain" });
        //offo=true;//to stop player o
        offx = false;//to allow plater x
        $(event.target).off('click');//to prevent player from click on already clicked div
        //$(event.target).addClass('o')
        tem = parseInt($(event.target).attr("id"));//here I get the index of div to use it as an index with array result
        index = tem;
        tem = 0;
        console.log("index of " + index);
        console.log("type of index " + typeof index);
        arrayOfesult[index] = 0;////insert 0 to array of result to represent 0 
        countClick++;
        console.log(arrayOfesult);

    }
    //determine different path
    //-------------------------
    if (countClick > 4) {// this mean the player 1 reach the point 'click 5' that may consider as win step

        // .....row path
        //var path1 = arrayOfesult.slice(0, 3);//element at first row
        var path1 = arrayOfesult[0] + arrayOfesult[1] + arrayOfesult[2];
        console.log('path1' + path1)
        //var path2 = arrayOfesult.slice(3, 6);//element at second row
        var path2 = arrayOfesult[3] + arrayOfesult[4] + arrayOfesult[5];
        console.log('path2' + path2)
        //var path3 = arrayOfesult.slice(6);//element at third row
        var path3 = arrayOfesult[6] + arrayOfesult[7] + arrayOfesult[8];
        console.log('path3' + path3)

        // .... column path 
        var path4 = arrayOfesult[0] + arrayOfesult[3] + arrayOfesult[6];
        console.log('path4' + path4)
        var path5 = arrayOfesult[1] + arrayOfesult[4] + arrayOfesult[7];
        console.log('path5' + path5)
        var path6 = arrayOfesult[2] + arrayOfesult[5] + arrayOfesult[8];
        console.log('path6' + path6)

        // .... diagnosis path  
        var path7 = arrayOfesult[0] + arrayOfesult[4] + arrayOfesult[8];
        console.log('path7' + path7)
        var path8 = arrayOfesult[2] + arrayOfesult[4] + arrayOfesult[6];
        console.log('path8' + path8)


        if (!(isNaN(path1))) {
            if (path1 == 3) {
                console.log("x winner");
                $(xo).off('click');
            }
            if (path1 == 0) {
                console.log("o winner");
                $(xo).off('click');
            }
        }
        if (!(isNaN(path2))) {
            if (path2 == 3) {
                console.log("x winner");
                $(xo).off('click');
            }
            if (path2 == 0) {
                console.log("o winner");
                $(xo).off('click');
            }

        }
        if (!(isNaN(path3))) {
            if (path3 == 3) {
                console.log("x winner");
                $(xo).off('click');
            }
            if (path3 == 0) {
                console.log("o winner");
                $(xo).off('click');
            }
        }

        if (!(isNaN(path4))) {
            if (path4 == 3) {
                console.log("x winner");
                $(xo).off('click');
            }
            if (path4 == 0) {
                console.log("o winner");
                $(xo).off('click');
            }

        }
        if (!(isNaN(path5))) {

            if (path5 == 3) {
                console.log("x winner");
                $(xo).off('click');
            }
            if (path5 == 0) {
                console.log("o winner");
                $(xo).off('click');
            }
        }
            if (!(isNaN(path6))) {
                if (path6 == 3) {
                    console.log("x winner");
                    $(xo).off('click');

                }
                if (path6 == 0) {
                    console.log("o winner");
                    $(xo).off('click');

                }
            }

            if (!(isNaN(path7))) {
                if (path7 == 3) {
                    console.log("x winner");
                    $(xo).off('click');

                }
                if (path7 == 0) {
                    console.log("o winner");
                    $(xo).off('click');

                }
            

            if (!(isNaN(path8))) {
                if (path8 == 3) {
                    console.log("x winner");
                    $(xo).off('click');
                }
                if (path8 == 0) {
                    console.log("0 winner");
                    $(xo).off('click');

                }

            }

        }
    }//close if click>4
        //-------------------------

        //console.log(playerX);
        //console.log(playerO);
        console.log(arrayOfesult);


        // ................................
    });

// ........................my solution ..............................................

// var xo = $(".box").on('click', function (event) {
//     //var playerX=$('#xPlayer').event
//     //var img=document.createElement('img');
//     var playerX = $('input[name=x]:checked').val();
//     var playerO = $('input[name=o]').val();

//     console.log(playerX == 'xPlayer');

//     if ((offx != true)) {
//         $(event.target).css({ "background-image": "url('images/x.png')", "background-size": "contain" });
//         offx = true;// to stop player x
//         //offo=false;// to allow player o
//         tem = parseInt($(event.target).attr("id"));//here I get the index of div to use it as an index with array result
//         index=tem;
//         tem=0;
//         console.log("index of " + index);
//         console.log("type of index " + typeof index);


//         $(event.target).off('click');//to prevent player from click on already clicked div
//         arrayOfesult[index] = 1;
//         countClick++;
//         console.log(arrayOfesult);

//     }
//     else {
//         $(event.target).css({ "background-image": "url('images/o.png')", "background-size": "contain" });
//         //offo=true;//to stop player o
//         offx = false;//to allow plater x
//         $(event.target).off('click');//to prevent player from click on already clicked div
//         //$(event.target).addClass('o')
//         arrayOfesult[index] = 0;
//         countClick++;
//         console.log(arrayOfesult);

//     }
//     // determine different path
//     //-------------------------
//     if (countClick > 4) {// this mean the player 1 reach the point 'click 5' that may consider as win step

//         // .....row path
//         //var path1 = arrayOfesult.slice(0, 3);//element at first row
//         var path1 = arrayOfesult[0] + arrayOfesult[1] + arrayOfesult[2];
//         console.log('path1' + path1)
//         //var path2 = arrayOfesult.slice(3, 6);//element at second row
//         var path2 = arrayOfesult[3] + arrayOfesult[4] + arrayOfesult[5];
//         console.log('path2' + path2)
//         //var path3 = arrayOfesult.slice(6);//element at third row
//         var path3 = arrayOfesult[6] + arrayOfesult[7] + arrayOfesult[8];
//         console.log('path3' + path3)
//         // .... column path 
//         var path4 = arrayOfesult[0] + arrayOfesult[3] + arrayOfesult[6];
//         console.log('path4' + path4)
//         var path5 = arrayOfesult[1] + arrayOfesult[4] + arrayOfesult[7];
//         console.log('path5' + path5)
//         var path6 = arrayOfesult[2] + arrayOfesult[5] + arrayOfesult[8];
//         console.log('path6' + path6)

//         // .... diagnosis path  
//         var path7 = arrayOfesult[0] + arrayOfesult[4] + arrayOfesult[8];
//         console.log('path7' + path7)
//         var path8 = arrayOfesult[2] + arrayOfesult[4] + arrayOfesult[6];
//         console.log('path8' + path8)


//         if (path1 == 3) {
//             console.log("x winner");
//         }
//         if (path1== 0) {
//             console.log("o winner");
//         }
//         if (path2 == 3) {
//             console.log("x winner");
//         }
//         if (path2 == 0) {
//             console.log("o winner");
//         }
//         if (path3 == 3) {
//             console.log("x winner");
//         }
//         if (path3 == 0) {
//             console.log("o winner");
//         }
//         if (path4 == 3) {
//             console.log("x winner");
//         }
//         if (path4 == 0) {
//             console.log("o winner");
//         }
//         if (path5 == 3) {
//             console.log("x winner");
//         }
//         if (path5 == 0) {
//             console.log("o winner");
//         }
//         if (path6 == 3) {
//             console.log("x winner");
//         }
//         if (path6 == 0) {
//             console.log("o winner");
//         }
//         if (path7 == 3) {
//             console.log("x winner");
//         }
//         if (path7 == 0) {
//             console.log("o winner");
//         }

//         if (path8 == 3) {
//             console.log("x winner");
//         }
//         if (path8 == 0) {
//             console.log("0 winner");
//         }
//     }//close if click>4





//     // function add(accumulator, a) {
//     //     return accumulator + a;
//     // }


//     //}






//     // if ( !(path1 === undefined || path1.length == 0) && path1.reduce(add)==3){
//     //     console.log("x winner");
//     // }
//     // if (!(path1 === undefined || path1.length == 0)&&path1.reduce(add)==0){
//     //     console.log("o winner");
//     // }
//     // if(!(path2 === undefined || path2.length == 0)&& path2.reduce(add)==3){
//     //     console.log("x winner");
//     // }
//     // if(!(path2 === undefined || path2.length == 0)&& path2.reduce(add)==0){
//     //     console.log("o winner");

//     // }
//     // if(!(path3 === undefined || path3.length == 0)&&path3.reduce(add)==3){
//     //     console.log("x winner");

//     // }
//     // if(!(path3 === undefined || path3.length == 0)&&path3.reduce(add)==0){
//     //     console.log("o winner");
//     // }
//     // if( !(path4 === undefined || path4.length == 0)&&path4==3){
//     //     console.log("x winner");
//     // }
//     // if( !(path4 === undefined || path4.length == 0)&&path4==0){
//     //     console.log("o winner");
//     // }
//     // if(!(path5 === undefined || path5.length == 0)&& path5==3){
//     //     console.log("x winner");
//     // }
//     // if(!(path5 === undefined || path5.length == 0)&& path5==0){
//     //     console.log("o winner");
//     // }
//     // if( !(path6 === undefined || path6.length == 0)&&path6==3){
//     //     console.log("x winner");
//     // }
//     // if( !(path6 === undefined || path6.length == 0)&&path6==0){
//     //     console.log("o winner");
//     // }
//     // if( !(path7 === undefined || path7.length == 0)&&path7==3){
//     //     console.log("x winner");
//     // }
//     // if( !(path7 === undefined || path7.length == 0)&&path7==0){
//     //     console.log("o winner");
//     // }
//     // if( path8==3){
//     //     console.log("x winner");
//     // }
//     // if ( path8==0)
//     // {
//     //     console.log("0 winner");
//     // }
//     // function add(accumulator,a){
//     //     return accumulator+a;
//     // }


//     // }


//     //-------------------------

//     //$(event.target).hasClass('x')
//     console.log(playerX);
//     console.log(playerO);
//     console.log(arrayOfesult);





//     // //............determine winner ..........
//     // if (countClick>8){
//     // //for (var i=0;i<arrayOfesult.length;i++){
//     // for (var i in arrayOfesult){
//     //     // console.log("track")
//     //     if ((arrayOfesult[i] =='x' && arrayOfesult[i+1]=='x' && arrayOfesult[i+2]=='x' 
//     //     || arrayOfesult[i+3] =='x' && arrayOfesult[i+4] =='x' && arrayOfesult[i+5]=='x'
//     //     ||arrayOfesult[i+6] =='x'  && arrayOfesult[i+7]=='x' && arrayOfesult[i+8]=='x' 
//     //     ||arrayOfesult[i] =='x' && arrayOfesult[i+4]=='x' && arrayOfesult[i+8]=='x' 
//     //     ||arrayOfesult[i+2] =='x' && arrayOfesult[i+4]=='x' && arrayOfesult[i+6]=='x'
//     //     ||arrayOfesult[i+1] =='x' && arrayOfesult[i+4]=='x' && arrayOfesult[i+7]=='x'
//     //     ||arrayOfesult[i+3] =='x' && arrayOfesult[i+4]=='x' && arrayOfesult[i+5]=='x')){
//     //         console.log('x winner')
//     //     }

//     //     if  ((arrayOfesult[i]=='o'  && arrayOfesult[i+1]=='o' && arrayOfesult[i+2]=='o' 
//     //     || arrayOfesult[i+3]=='o'  && arrayOfesult[i+4]=='o' && arrayOfesult[i+5]=='o'
//     //     ||arrayOfesult[i+6] =='o' && arrayOfesult[i+7]=='o' && arrayOfesult[i+8]=='0' 
//     //     ||arrayOfesult[i] =='o' && arrayOfesult[i+4]=='o' && arrayOfesult[i+8]=='0' 
//     //     ||arrayOfesult[i+2] =='o' && arrayOfesult[i+4]=='o' && arrayOfesult[i+6]=='0'
//     //     ||arrayOfesult[i+1] =='o' && arrayOfesult[i+4]=='o' && arrayOfesult[i+7]=='0'
//     //     ||arrayOfesult[i+3] =='o' && arrayOfesult[i+4]=='o' && arrayOfesult[i+5]=='0')){
//     //         console.log('o winner')
//     //     }

//     // }
//     // }// close check click grater than 9 to print winner
//     //     //.......................................




//     //img.css('src','')
//     //$(event.target).css('background-color','red');

// });



//................................
console.log("Linked to js file correct");

var offX = false;
//var offo = false;
var arrayOfeResult = [];
arrayOfeResult.length = 9; //create array of 9 empty elements
var countClick = 0; // to count the number of clicks
var index = 0; // to get the id of clicked div and use it as index of arrayOfeResult
var tem = 0;
var winner; //used to check if there is a winner or not
var xScore=0,oScore=0;
var play=true;

var canvas=document.getElementById("container");
console.log(canvas);

// var path = document.querySelector('.path-vert');
// var length = path.getTotalLength();



if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  console.log("Hi");
  // drawing code here
  } else {

  // canvas-unsupported code here
}
// var ctx = canvas[0].getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// window.onload = function() {



if (play==true){

var xo = $(".box").on("click", function play (event) {
  var target=$(event.target);
  tem = parseInt((target).attr("id")); //here I get the index of div to use it as an index with array result
  index = tem;
  tem = 0;
  console.log(target);
  //var clickedElem = event.target;
  // Check if the event.target matches some selector, and do things...
  // var playerX = $('input[name=x]:checked').val();
  // var playerO = $('input[name=o]').val();
  //console.log(playerX == 'xPlayer');
  // turn of X player
  if (offX != true) {
    (target).css({
      "background-image": "url('images/x.png')",
      "background-size": "contain"
    });
    offX = true; // to stop player x
    //console.log("index of " + index);
    //console.log("type of index " + typeof index);
    xScore++;
    //console.log("xScore"+xScore)
    (target).off("click"); //to prevent player from click on already clicked div
    arrayOfeResult[index] = 1; //insert 1 to array of result to represent x
    countClick++;
    //console.log(arrayOfeResult);

    // turn of O player
  } else {
    (target).css({
      "background-image": "url('images/o.png')",
      "background-size": "contain"
    });
    offX = false; //to allow plater x
    (target).off("click"); //to prevent player from click on already clicked div
    console.log("index of " + index);
    console.log("type of index " + typeof index);
    arrayOfeResult[index] = 0; ////insert 0 to array of result to represent 0
    countClick++;
    oScore++;
    console.log("oScore"+oScore);
    console.log(arrayOfeResult);
  }
  if (countClick == 5){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
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




    

for (var i=1;i<=8;i++){
  var result=eval((`path${i}`));// trying to evaluates or executes an argument. 
  //console.log(result+'I'm result '+ typeof s);

  if (!isNaN(result)){
    if (result == 3) {
      console.log("x winner");
      swal("Good job!", "F X winner!", "success", {
        button: "Aww yiss!",
      });
      $(xo).off("click");
      winner = true;
      break;//from loop
    }
    if (result == 0) {
      console.log("o winner");
      swal("Good job!", "F O winner!", "success", {
        button: "Aww yiss!",
      });
      $(xo).off("click");
      winner = true;
      break;//from loop
    }
  }
  }
}
if (countClick ==9 && winner != true) {
  swal("Draw !!", "...Try agin!");
    console.log("Draw !!");
// //-----------------------

//     if (!isNaN(path1)) {
//       if (path1 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path1 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path2)) {
//       if (path2 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path2 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path3)) {
//       if (path3 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path3 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path4)) {
//       if (path4 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path4 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path5)) {
//       if (path5 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path5 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path6)) {
//       if (path6 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path6 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path7)) {
//       if (path7 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path7 == 0) {
//         console.log("o winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (!isNaN(path8)) {
//       if (path8 == 3) {
//         console.log("x winner");
//         $(xo).off("click");
//         winner = true;
//       }
//       if (path8 == 0) {
//         console.log("0 winner");
//         $(xo).off("click");
//         winner = true;
//       }
//     }
//     if (winner != true) {
//       console.log("Draw !!");
//     }
//     //-----------------------

  } //close (if click>4)
  //-------------------------
  //console.log(playerX);
  //console.log(playerO);

  console.log(arrayOfeResult);
  // ................................
}); // close click function

//}//close play function
}
 //close if play agin
// **......My challenges........**
// 1- link jq script file to html
// 2- switch between two players
// 3- track each player steps to determine winner
// 4- how to determine path of win and compare it with the progress of players
// 5- how to create an array that match user x,o seq correctly
// 6- how to move from div id to another div id
// 7- how to stop play on win case

//start new game
function reset(){
document.location.href="";
}

function playAgin(){
play=true;

}

//...............................




// **......My challenges........**
// 1- link jq script file to html
// 2- switch between two players
// 3- track each player steps to determine winner
// 4- how to determine path of win and compare it with the progress of players  
// 5- how to create an array that match user x,o seq correctly 
// 6- how to move from div id to another div id
// 7- how to stop play at one round


