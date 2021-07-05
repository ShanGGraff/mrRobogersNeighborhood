# Mr. Roboger's Neighborhood

#### Explain Project

#### By Shane Graff

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Vs Code
* Looping

## Description
This is a basic website that takes a number from a user and turns it into an array (ex: 9 would be turned into [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]). It then swaps out every occurence of the number 1 with the string "Beep!", every occurence of the number 2 with the string "Boop!", and finally changes any occurence of the number three with the string "Won't you be my neighbor?".


## Setup/Installation Requirements

* Clone repository to directory of your choice (git clone https://github.com/ShanGGraff/mrRobogersNeighborhood) or
* Fork website from https://github.com/ShanGGraff/mrRobogersNeighborhood

## Specs

Describe: createNumberArray()
Test1: "It should return an array with a 0 if the number 0 is inputted"
Expect(createNumberArray(0).toEqual([0]);
  
Test2: "It should return an array from 0 to the user's inputted number"
Expect(createNumberArray(5).toEqual([0,1,2,3,4,5]);

Describe: beepBoop()
beepBoop should take in an array as input

Test1: "For every inputted number that is a 1, the 1 should be replaced with the string "Beep!"

Test2: "For every inputted number that is a 2, the 2 should be replaced with the string "Boop!"
Expect(beepBoop(2)output: ["0","Beep!", "Boop!"]);

Test3: "For every inputted number that is a 3, the 3 should be replaced with the string "Won't you be my neighbor?"
Expect(beepBoop(3)output: [0, "Beep!", Boop!", "Won't you be my neighber?");]

Test4: "For every non-1, non-2, and non-3 numbers, that number shoul be outputted"
Expect(beepBoop(11)output: [0, "Beep!", Boop!", "Won't you be my neighber?", 4, 5, 6, 7, 8, 9 "Beep!", "Beep!);]


## Known Bugs
Currently testing for Boop! not working


## License
MIT

Copyright (c) 2021 Creators 

## Contact Information
Shane Graff <copellius@gmail.com>
Github page: https://github.com/ShanGGraff
LinkedIn: https://www.linkedin.com/in/shanegraff/