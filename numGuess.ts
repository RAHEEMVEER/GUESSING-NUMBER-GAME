#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let continueGame = true;

while (continueGame) {
  const userInput = await inquirer.prompt([
    {
      name: "guessingNum",
      type: "number",
      message: "ENTER YOUR NUMBER BETWEEN 1-6:",
    },
  ]);

  let compNum = Math.floor(Math.random() * 6 + 1);

  if (userInput.guessingNum === compNum) {
    console.log(
      chalk.green(`\n HEY CONGRATS YOU GUESS RIGHT NUMBER.
    YOUR NUMBER IS "${userInput.guessingNum}" AND COMPUTER NUMBER IS "${compNum}"\n`)
    );
  } else {
    console.log(chalk.red(`\nYOU ENTER WRONG NUMBER PLEASE TRY AGAIN !!\n`));
  }

  const { wantToContinue } = await inquirer.prompt([
    {
      name: "wantToContinue",
      type: "confirm",
      message: "DO YOU WANT TO PLAY THIS GAME ?",
    },
  ]);

  continueGame = wantToContinue;

  if (!continueGame) {
    console.log(
      `THANKS FOR USING THIS GAME CREATOR BY ` + chalk.green(`"RAHEEM VEER"\n`)
    );
  }
}
