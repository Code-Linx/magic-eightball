function getMagicEightBall() {
  const userInput = document.getElementById("userInput").value;
  const eightBallAnswer = document.getElementById("eightBallAnswer");

  // Convert user input to a number
  const userNumber = parseInt(userInput);

  if (isNaN(userNumber) || userNumber < 0 || userNumber > 20) {
    eightBallAnswer.textContent =
      "Please enter a valid number between 0 and 20.";
    eightBallAnswer.style.color = "red";
    return;
  }

  let eightBall = "";

  // Control flow using a switch statement to assign a Magic Eight Ball reply based on the user's number
  switch (userNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "Reply hazy, try again";
      break;
    case 2:
      eightBall = "Don’t count on it";
      break;
    case 3:
      eightBall = "Ask again later";
      break;
    case 4:
      eightBall = "My sources say no";
      break;
    case 5:
      eightBall = "Yes, definitely";
      break;
    case 6:
      eightBall = "Cannot predict now";
      break;
    case 7:
      eightBall = "Outlook not so good";
      break;
    case 8:
      eightBall = "The journey ahead holds great promise.";
      break;

    case 9:
      eightBall = "Seek inspiration from unexpected places.";
      break;

    case 10:
      eightBall = "Embrace uncertainty and discover new possibilities.";
      break;

    case 11:
      eightBall = "The stars align in your favor";
      break;
    case 12:
      eightBall = "Outlook is promising";
      break;
    case 13:
      eightBall = "Better not tell you now";
      break;
    case 14:
      eightBall = "Ask again when the moon is full";
      break;
    case 15:
      eightBall = "Chances are high";
      break;
    case 16:
      eightBall = "The universe says yes";
      break;
    case 17:
      eightBall = "Future looks bright";
      break;
    case 18:
      eightBall = "Focus on the positive";
      break;
    case 19:
      eightBall = "Signs point to success";
      break;
    case 20:
      eightBall = "Trust your instincts";
      break;
  }

  // Display the Magic Eight Ball answer
  eightBallAnswer.textContent = eightBall;
  eightBallAnswer.style.color = "green";
}
