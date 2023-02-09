<script lang="ts">
let score = 0;
let userNumber: number;
let pcNumber: number;
let dialogOpen: boolean = true,
  numberError: boolean = false;
let tempUserInput: number;

function oneRound() {
  return new Promise<{ points: number; pcGuess: number }>((resolve, reject) => {
    tempUserInput = Number(window.prompt("enter a number"));

    if (isNaN(tempUserInput) || tempUserInput > 6 || tempUserInput < 1) {
      reject("aaa");
    }
    pcNumber = Math.ceil(Math.random() * 6);

    if (tempUserInput == pcNumber) {
      resolve({ points: 2, pcGuess: pcNumber });
    } else if (Math.abs(tempUserInput - pcNumber) == 1) {
      resolve({ points: 1, pcGuess: pcNumber });
    } else {
      resolve({ points: -1, pcGuess: pcNumber });
    }
  });
}

function playAgain() {
  return new Promise((resolve) => {
    let playAgain = window.confirm("Play again?");
    if (playAgain) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

function askToPlayAgain() {
  playAgain().then((i) => {
    if (i) {
      playFunc();
    } else {
      console.log("thanks for playing!");
    }
  });
}
function playFunc() {
  oneRound()
    .then((i) => {
      score += i.points;
      console.log(i.pcGuess);
      askToPlayAgain();
    })
    .catch((e) => {
      console.log(e);
      askToPlayAgain();
    })
    .finally(() => {
      console.log("reached end");
    });
}

playFunc();
</script>

<div
  class="flex items-center justify-center text-center w-screen h-screen bg-gray-300"
>
  <div class="">
    <h1 class="text-4xl m-4">Guessing game!</h1>
    <p class="text-xl">
      your current score: <span class="text-blue-600  border rounded-full p-1">
        {score}
      </span>
    </p>
    <br />

    <h1 class="text-xl m-4">Current game:</h1>
    <p>
      you entered: {userNumber ?? "none"}
    </p>
    <p>
      my guess: {pcNumber ?? "none"}
    </p>
    <!-- onclick -->
    <button class="bg-blue-600 w-full rounded-full p-4 m-4 text-white"
      >Play game?</button
    >
    <dialog class="bg-yellow-100 rounded-xl" open="{dialogOpen}">
      <p>Type your guessed number between 1-6:</p>
      <!-- onchange -->
      <input type="text" bind:value="{tempUserInput}" />
      <!-- onclick -->
      <button disabled="{numberError}" class="disabled:text-gray-500">Ok</button
      >
    </dialog>
  </div>
</div>
