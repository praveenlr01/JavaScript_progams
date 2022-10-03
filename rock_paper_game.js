let game = confirm("Shall we Play? click ok to play.");

if (game) {
  alert("The Game Starts.");
  let playerOne = prompt("Choose between [rock,paper,scissor] ");
  if(playerOne){
  playerOne = playerOne.trim().toLowerCase();
  if (playerOne == "rock" || playerOne == "scissor" || playerOne == "paper") {
    let playerTwo = Math.floor(Math.random() * 3);
    playerTwo = playerTwo == 0 ? "rock" : playerTwo == 1 ? "paper" : "scissor";
    if (playerOne == playerTwo) {
      alert("Match tie");
    } else if (playerOne == "rock" && playerTwo == "scissor") {
      alert(`You Win.. You choose ${playerOne} and Computer Choose ${playerTwo}`);
    } else if (playerOne == "paper" && playerTwo == "rock") {
      alert(`You Win..You Choose ${playerOne} and Computer choose ${playerTwo}.`);
    } else if (playerOne == "scissor" && playerTwo == "paper") {
      alert(`You Win..You choose ${playerOne} and Computer choose ${playerTwo}`);
    } else {
      alert(`You Lose.. You Choose ${playerOne} and Computer Choose ${playerTwo}`);
    }
    let again=confirm("Let's Play Again?");
    again=again?location.reload():alert("Thanks for Playing.")
  } else {
    alert("Enter a valid Input.");
  }
}else {
    alert("Maybe later..")
}
} else {
  alert("ok. Maybe Later...");
}
