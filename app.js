let button = document.querySelectorAll(".btn");

let screenText = document.querySelector(".screen p");

let numbersList = [];

let number1 = "";

let result = "";

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    click(e);

    gettingUserInput(e);

    updateScreen(numbersList.join(""));

    checkForSign(e);
  });
}

// if (event.target.children[0].textContent === "+") {
//   number1 = screenText.innerText;
//   numbersList = [];
//   numbersList.push(e.target.textContent);
//   screenText.textContent = numbersList.join("");
//   numbersList = [];
//   console.log(number1);

//   result = parseInt(number1) + parseInt(screenText.innerText);
// } else if (event.target.children[0].textContent === "=") {
//   result = parseInt(number1) + parseInt(screenText.innerText);
//   screenText.textContent = result;
// }

function checkForSign(event) {
  // GIVING THE RESULT TO USER
  if (event.target.children[0].textContent === "=") {
    let equation = screenText.textContent;

    updateScreen(eval(equation.replace("=", "")));
  }

  // CHECKING FOR THE CLEAR SCREEN METHOD

  if (event.target.children[0].textContent === "C") {
    // CLEARING THE SCREEN
    updateScreen("");
    numbersList = [];
  }
}

function updateScreen(update) {
  screenText.textContent = update;
}

function gettingUserInput(event) {
  if (
    event.target.children[0].textContent !== "+" ||
    event.target.children[0].textContent !== "="
  ) {
    numbersList.push(event.target.innerText);
  }
}

function click(event) {
  event.target.classList.add("clicked");

  setTimeout(() => {
    event.target.classList.remove("clicked");
  }, 150);
}
