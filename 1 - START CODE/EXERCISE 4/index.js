// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
// passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  hide(lostView);
  hide(wonView);
  show(passwordView);
  instructionLabel.textContent = `Enter your code (You can try ${chanceRemaining} times only !)`;
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  show(wonView);
}
function showLost() {
    // You can use this function to dispaly the Lost View
    show(lostView);
}

 
function handleCheck() {
     // Manage your logic when the button is pressed
  hide(passwordView)
  if (passwordInput.value != SECRET_CODE){
    chanceRemaining--;
    showLost();
    if (chanceRemaining == 0){
      hide(tryAgainButton);
      console.error("RUN OUT OF TRY!");
    }
  }

  else{
    showWin();
  }
  localStorage.setItem('chance', chanceRemaining);

}

// MAIN   ---------------------------------------------------------
let chanceRemaining = localStorage.getItem('chance');

if (!chanceRemaining){
  chanceRemaining = 3;
}
console.log(chanceRemaining);

if (chanceRemaining <= 0){
  hide(passwordView);
  show(lostView)
  hide(tryAgainButton)
}
 