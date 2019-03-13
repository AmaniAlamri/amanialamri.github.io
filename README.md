# Ship of The Desert Tic Tac Toe Game
Simple tic tac toe game created with Javascript

## Table of Contents 
* [Introdction](#Introdction)
* [Technologies](#technologies)
* [Approach] (#approach)
* [Launch](#launch)



## Introdction 
This project aimed to create a simple tic tac toe game website using Javascript.

## Technologies
Project is created with:
* Html 5
* Javascript 1.7
* W3 CSS 4
* Animate.css 3.7.0
* Jquery 3.3.1
* Sweetalert 2.0


## Approach
1. Create the html page as prototype and start work on javascript.
2. Add styling by using css and 3w css. 
3. Add animation using animate.css, sweet_alert, and JQuery
4. As functionality, I created 9 divs and empty array with length of 9. I gave each div id start from 0 to 8. On each click, I get the id of clicked div and use it as index of array. If the player is x, insert number 1 to this index, otherwise, insert number 0 to represent player o. After that, define 8 paths: 3 rows, 3 columns, 2 diagonals. This paths represent sum values of array elements. In each path, if the result equal to three, that means player x is winner, in case of equal to 0, winner is player 0, otherwise, there is no winner if the both players reach 9th click. 

## Launch
https://amanialamri.github.io/index.html
