function task1() {

  const quantity = Number(prompt("Enter a number:"));

  document.querySelector("#qty").textContent = `Quantity: ${quantity}`;

  const percentage = Number(prompt("Enter a percentage amount:"));

  const result = (percentage / 100) * quantity;

  document.querySelector("#task1Output").textContent = `${percentage}% of Quantity, ${quantity}, is ${result}`;

}

function task2() {

  const grade = Number(prompt("Enter a grade between 1 and 100:"));

  let letterIf;

  if (grade >= 91) {

    letterIf = "A";

  } else if (grade >= 81) {

    letterIf = "B";

  } else if (grade >= 71) {

    letterIf = "C";

  } else if (grade >= 61) {

    letterIf = "D";

  } else {

    letterIf = "F";

  }

  let letterSwitch;

  switch (true) {

    case grade >= 91:

      letterSwitch = "A";

      break;

    case grade >= 81:

      letterSwitch = "B";

      break;

    case grade >= 71:

      letterSwitch = "C";

      break;

    case grade >= 61:

      letterSwitch = "D";

      break;

    default:

      letterSwitch = "F";

  }

  document.querySelector("#task2Output").textContent = `(a) Grade ${grade} converts to letter grade: ${letterIf}\n(b) Grade ${grade} converts to letter grade: ${letterSwitch}`;

}

function task3() {

  const professor = prompt("Enter the punishing professor's name:");

  const line = prompt("Enter the line to write:");

  const times = Number(prompt("Enter the number of times to write the line:"));

  for (let i = 1; i <= times; i++) {

    console.log(`${i}: ${line}`);

  }

}

function task4() {

  const professor = prompt("Enter the punishing professor's name:");

  const line = prompt("Enter the line to write:");

  const times = Number(prompt("Enter the number of times to write the line:"));

  let output = "";

  let i = 1;

  while (i <= times) {

    output += `${i}: ${line}\n`;

    i++;

  }

  document.querySelector("#task4Output").textContent = output;

}

const task5 = () => {

  const professor = prompt("Enter the punishing professor's name:");

  const line = prompt("Enter the line to write:");

  const times = Number(prompt("Enter the number of times to write the line:"));

  let output = "";

  let i = 1;

  while (i <= times) {

    output += `${i}: ${line}\n`;

    i++;

  }

  document.querySelector("#task5Output").textContent = output;

};

function task6Strategy1() {

  let output = "";

  for (let factor1 = 1; factor1 <= 12; factor1++) {

    for (let factor2 = 1; factor2 <= 12; factor2++) {

      output += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;

    }

    output += "\n";

  }

  document.querySelector("#task6Output1").textContent = output;

}

function createTables(factor1) {

  let line = "";

  for (let factor2 = 1; factor2 <= 12; factor2++) {

    line += `${factor1} x ${factor2} = ${factor1 * factor2}   `;

  }

  return line;

}

function task6Strategy2() {

  let output = "";

  for (let factor1 = 1; factor1 <= 12; factor1++) {

    output += createTables(factor1) + "\n";

  }

  document.querySelector("#task6Output2").textContent = output;

}

function createTablesWithLimit(factor, delimiter) {

  let block = "";

  for (let multiplier = 1; multiplier <= delimiter; multiplier++) {

    block += `${factor} x ${multiplier} = ${factor * multiplier}\n`;

  }

  return block;

}

function allTables(delimiter) {

  let output = "";

  for (let factor = 1; factor <= 12; factor++) {

    output += createTablesWithLimit(factor, delimiter) + "\n";

  }

  return output;

}

function task6Strategy3() {

  const delimiter = Number(prompt("Enter a delimiter, like 10 or 12:"));

  document.querySelector("#task6Output3").textContent = allTables(delimiter);

}

function task7() {

  console.log(sayHi());

  function sayHi() {

    return "Hello! I was hoisted.";

  }

  console.log(myVar);

  var myVar = "Now I have a value";

  console.log(myVar);

}