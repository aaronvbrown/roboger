# _MR Roboger's Neighborhood - Aaron Brown_

#### By **Aaron Brown**

#### A page for returning a list based on an input number by Aaron Brown.  Uses html, css, javascript.


## Technologies Used

* html
* css
* javascript
* git
* vs code
* live server for vs code
* chrome

## Description

This page intended to return a list of numbers and responses based on a user input number.

## Setup Requirements

* clone the repository
* install vs code
* install live server for vs code
* open the repo in vs code
* open index.html in browser using live server


## Known Bugs
* none at this time


## Tests (Pseudocode)

Describe:  roboger()
Test:  "It should return an array with the numbers from 0 to the user's input number."
Code: 
roboger(0);
Expected Output [0]

Test:  "It should return an array with 0 if the user enters 0."
Code:
roboger(0);
Expected Output [0];

Test:  "It should return an array with "Beep!" if the user enters 1."
Code:
roboger(1);
Expected Output [0, "Beep!"];

Test:  "It should return an array with "Boop!" if the user enters 2."
Code:
roboger(2);
Expected Output [0, "Beep!", "Boop!"];

Test:  "It should return an array with "Won't you be my neighbor?" if the user enters 3."
Code:
roboger(3);
Expected Output [0, "Beep!", "Boop!", "Won't you be my neighbor?"];

Test:  "It should return "Beep!" as the last entry for user input 10."
Code:
roboger(10);
Expected Output [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, .. 9, "Beep!"];

Test:  "11, 12, 13 should repeat 1, 2, 3 at the end for input 13."
Code:
roboger(13);
Expected Output [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, .. 9, "Beep!", "Boop!", "Won't you be my neighbor?"];

Test:  "10's (except 12, 13) should return 'Beep!'."
Code:
roboger(19);
Expected Output for 10's [..,"Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"];

Test:  "20's (except 23) should return 'Boop!'."
Code:
roboger(29);
Expected Output for 20's [..,"Boop!","Boop!","Boop!", "Won't you be my neighbor?", ,"Boop!","Boop!","Boop!","Boop!","Boop!","Boop!"];

Test:  "30's return 'Won't you be my neighbor?'."
Code:
roboger(39);
Expected Output for 30's [..,"Won't you be my neighbor?" x 10];



## License
MIT License

Copyright (c) 2023 Aaron Brown