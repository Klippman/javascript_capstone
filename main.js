// object wordBoard
//     will need start and button

//     will need array of words

//         random function will be necessary to start games with new word
//     if letter guessed correctly
//         return true
//         else
//         return false

var puzzles = ["DALLAS   COWBOYS", "ATLANTA  FALCONS", "DENVER   BRONCOS", "CAROLINA PANTHERS", "MIAMI    DOLPHINS", "OAKLAND  RAIDERS", "ARIZONA  CARDINALS", "BUFFALO  BILLS", "CHICAGO  BEARS", "DETROIT  LIONS", "HOUSTON  TEXANS", "SEATTLE  SEAHAWKS"];
var keyBoardLetter;
var shuffle = puzzles[Math.floor(Math.random() * puzzles.length)];
var hint = document.querySelector(".hint");


function checkLetter(store) {
var team1 = shuffle.split("");
    for (var i = 0; i < team1.length; i++){
        if (store == team1[i]){
            document.querySelectorAll(".block")[i].innerHTML = store;
        }
    }
}

document.addEventListener("keypress", function(event){
    keyBoardLetter = event.key.toUpperCase();
    checkLetter(keyBoardLetter);
})

// attempting to get hints to display below "next puzzle" button
let hintObject = {DALLAS: "America's team", ATLANTA: "Dirty Bird", DENVER: "John Elway", CAROLINA: "Cam Newton", MIAMI: "Dan Marino", OAKLAND: "Bo Jackson", ARIZONA: "Red Bird", BUFFALO: "Jim Kelly", CHICAGO: "Walter Payton", DETROIT: "Barry Sanders", HOUSTON: "J.J. Watt", SEATTLE: "Twelfth Man"};

hint.innerHTML = "Clue: ${hintObject[shuffle]}";

