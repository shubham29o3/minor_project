let playgame = true;

playgame = confirm("Do you wish to play rock paper scissor game");
while (playgame) {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  alert("Welcome to Rock, Paper and Scissors Game");
  let my_score = 0;
  let computer_score = 0;
  let undecieded_score = 0;
  let myChoice;

  let playAgain = true;

  while (playAgain) {
    myChoice = prompt("Rock, Paper or Scissor? : (R,P or S)").toUpperCase();

    if (myChoice === "R" && computerChoice === 1) {
      alert("This Game is Draw because You and Computer Choose Rock");
      undecieded_score++;
    } else if (myChoice === "P" && computerChoice === 2) {
      alert("This Game is Draw because You and Computer Choose Paper");
      undecieded_score++;
    } else if (myChoice === "S" && computerChoice === 3) {
      alert("This Game is Draw because You and Computer Choose Scissor");
      undecieded_score++;
    } else if (myChoice === "R" && computerChoice === 2) {
      alert(
        "You had Won this Game because you Choose Rock and Computer Choose Paper"
      );
      my_score++;
    } else if (myChoice === "R" && computerChoice === 3) {
      alert(
        "Computer had Won this Game because you Choose Rock and Computer Choose Scissor"
      );
      computer_score++;
    } else if (myChoice === "P" && computerChoice === 1) {
      alert(
        "Computer had Won this Game because you Choose Paper and Computer Choose Rock"
      );
      computer_score++;
    } else if (myChoice === "P" && computerChoice === 3) {
      alert(
        "You had Won this Game because you Choose Rock and Computer Choose Scissor"
      );
      my_score++;
    } else if (myChoice === "S" && computerChoice === 1) {
      alert(
        "You had Won this Game because you Choose Scissor and Computer Choose Paper"
      );
      my_score++;
    } else if (myChoice === "S" && computerChoice === 2) {
      alert(
        "Computer had Won this Game because you Choose Scissor and Computer Choose Rock"
      );
      computer_score++;
    } else {
      alert("Looks like you made an error in Choosing R, P and S");
      undecieded_score++;
    }

    let total_game = my_score + computer_score + undecieded_score;

    alert(
      "you have won " + my_score + " games out of " + total_game + " games."
    );

    playAgain = confirm("Are you want to play this game again?");
  }
}
