const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
const cardContainer = document.querySelector(".container");
function createCard() {
 
  // 1 - Random color for card
  cardColor = randomColor();
   
   
  // 2 - Set card text
  const card = document.createElement("div");
  const pTag = document.createElement("p");
  pTag.textContent = "Description";
  card.appendChild(pTag);
  
  // 3 - Set card footer
  const cardFooter = document.createElement("div")
  cardFooter.className = "card-footer";
  card.appendChild(cardFooter);

  //  4 - Manage footer button
  const button = document.createElement("button")
  button.textContent = "Remove Card";
  cardFooter.appendChild(button); 
  button.addEventListener("click", () => {
    cardContainer.removeChild(card);
  })
  cardFooter.appendChild(button);

  // 5 - Add card to containers
  card.style.backgroundColor = cardColor;
  cardContainer.appendChild(card);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);