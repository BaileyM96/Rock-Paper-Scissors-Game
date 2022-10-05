// Start with variables for win,tie, losses

var wins = 0;
var losses = 0;     //This will keep track of wins and losses for score board
var ties = 0;


var possibleChoices = ['R', 'P', 'S'];   //I will convert this later for the computer to access the values


//add function here for gameplay and add user prompt 
var gameplay = function() {
   var userChoice = prompt("Pick either R, P, or S:");
   if(!userChoice) { //Come back and add code for if the user doesnt add the prompted input
    return;
   }

    // We want the gameplay to select a random possible choice and give it to the computer to play against us
   var selectArrayElements = Math.floor(Math.random() * possibleChoices.length);
   var computerChoices = possibleChoices[selectArrayElements];
   alert(`The computer has picked ${computerChoices}!`);

   // Add if statements for all  possible choices

 if(userChoice === computerChoices) {
    ties++; // this will increment our ties variable in the begining
    alert('Tie!');
 } else if (  // This else if will be for losses this is one way to code else if
    (userChoice === 'R' && computerChoices === 'S') ||
    (userChoice === 'P' && computerChoices === 'R') ||
    (userChoice === 'S' && computerChoices === 'P')
 ) {
    wins++;
    alert('You Won!');
  
 } else {
    (userChoice === 'R' && computerChoices === 'P')
    (userChoice === 'P' && computerChoices === 'S')
    (userChoice === 'S' && computerChoices === 'R')

    losses++;
    alert('You lost! ');
  }
  alert(
    'stats:\nWins' + wins + '\nLosses' + losses + '\nTies' + ties
  );

   var replay = confirm('Play Again?');
   if(replay) {
    gameplay();
   }
};
gameplay();