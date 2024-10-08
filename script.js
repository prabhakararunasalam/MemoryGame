// document.addEventListener("DOMContentLoaded", () => {
//   const cards = [
//     "😋",
//     "🤬",
//     "🤩",
//     "😡",
//     "🥰",
//     "😍"
//   ];
//   const cardList = [...cards, ...cards]; // Duplicate the cards for matching pairs
//   console.log(cardList);

//   const gameBoard = document.getElementById("gameBoard");
//   const restartBtn = document.getElementById("restart");
//   const movesCounter = document.getElementById('moves');
//   let flippedCard = false;
//   let lockBoard = false;
//   let firstCard, secondCard;
//   let matchFound = 0;
//   let moves = 0;

//   // Shuffle cards
//   function shuffleCards() {
//     cardList.sort(() => 0.5 - Math.random());
//   }

//   // Create a card element
//   function createCard(emoji) {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
//     cardElement.dataset.emoji = emoji; // Store emoji data in dataset
//     cardElement.innerHTML = `<div class="card-inner">
//                                 <div class="card-front">${emoji}</div>
//                                 <div class="card-back"></div>
//                               </div>`; // Front and back sides
//     return cardElement;
//   }

//   // Create the game board
//   function createBoard() {
//     shuffleCards();
//     gameBoard.innerHTML = ""; // Clear existing content

//     cardList.forEach((emoji) => {
//       const cardElement = createCard(emoji);
//       gameBoard.appendChild(cardElement);
      
//       //add eventlisener for card flip
//       cardElement.addEventListener("click",flipCard); // Append card to the game board
//     });
//   }
//   createBoard();
  

//   //flipcard
//   function flipCard(){
//     if(lockBoard) return;
//     if (this === firstCard) return;
//     this.classList.add("flipped");
//     console.log(firstCard);
    

//     if (!flippedCard){
//       flippedCard=true;
//       return;
//     }
//     secondCard=this;
//     console.log(secondCard);
    
//     moves+=1;
//     movesCounter.textContent=moves;
//     checkForMatch();
//   }

//   //check matching
//   function checkForMatch(){
//     let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

//     if (isMatch){
//       continueMatch()
//     }else{
//       unflipCards();
//     }
//   }

//   //continue the match
//   function continueMatch(){
//     disableCards();
//   }
//   //after card has match
//   function disableCards(){
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click' , flipCard);
    
//     resetBoard();
//     matchFound+=1;

//     if (matchFound === cardList.length / 2){
//       setTimeout(()=>alert('congratulations!!❤ You Won The Game!'), 500);

//     }
//   }

//   //unflipcards if the cards not match
//   function unflipCards(){
//     lockBoard = true;
//     setTimeout(()=>{
//       firstCard.classList.remove('flipped');
//       secondCard.classList.remove('flipped');

//       resetBoard();
//     }, 1000);

//   }

//   //reset board
//   function resetBoard(){
//     [flippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null , null];
//     moves= 0;
//   }

//   //restart game
//   function restartgame(){
//     matchFound = 0;
//     moves = 0;
//     createBoard();
//   }
//   restartBtn.addEventListener('click', restartgame);




//   // Call createBoard() on page load
//   createBoard();

//   // Handle game logic (replace with your actual game implementation)
//   // ... (your event listeners and logic for flipping cards, checking matches, etc.)
// });
document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    "😋",
    "🤬",
    "🤩",
    "😡",
    "🥰",
    "😍"
  ];
  const cardList = [...cards, ...cards]; // Duplicate the cards for matching pairs
  console.log(cardList);

  const gameBoard = document.getElementById("gameBoard");
  const restartBtn = document.getElementById("restart");
  const movesCounter = document.getElementById('moves');
  let flippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let matchFound = 0;
  let moves = 0;

  // Shuffle cards
  function shuffleCards() {
    cardList.sort(() => 0.5 - Math.random());
  }

  // Create a card element
  function createCard(emoji) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.emoji = emoji; // Store emoji data in dataset
    cardElement.innerHTML = `
      <div class="card-front">${emoji}</div>
      <div class="card-back"></div>
    `; // Front and back sides
    // console.log(cardElement.dataset.emoji);

    
    return cardElement;
    
    
  }

  // Create the game board
  function createBoard() {
    shuffleCards();
    gameBoard.innerHTML = ""; // Clear existing content

    cardList.forEach((emoji) => {
      const cardElement = createCard(emoji);
      gameBoard.appendChild(cardElement);

      // Add event listener for card flip
      cardElement.addEventListener("click", flipCard);
    });
  }
  createBoard();

  // Flip card
  function flipCard() {
    if (lockBoard) return;

    // this.classList.add("flipped");
    if (this === firstCard) return;
    this.classList.add("flipped");
    

    if (!flippedCard) {
      flippedCard = true;
      firstCard =this;
      console.log(firstCard);

      return;
    }
    secondCard = this;
    console.log(secondCard);
    
    moves += 1;
    movesCounter.textContent = moves;
    checkForMatch();
  }

  // Check for match
  function checkForMatch() {
    let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

    if (isMatch) {
      continueMatch();
    } else {
      unflipCards();
    }
  }

  // Continue the match
  function continueMatch() {
    disableCards();
  }

  // After cards have matched
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    matchFound += 1;

    if (matchFound === cardList.length / 2) {
      setTimeout(() => alert('Congratulations!!❤ You Won The Game!'), 500);
    }
  }

  // Unflip cards if they don't match
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      resetBoard();
    }, 1000);
  }

  // Reset board
  function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    moves = 0;
  }

  // Restart game
  function restartGame() {
    matchFound = 0;
    moves = 0;
    movesCounter.textContent = moves;
    createBoard();
  }
  restartBtn.addEventListener('click', restartGame);
});