document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "ress/img/fries.png",
    },
    {
      name: "fries",
      img: "ress/img/fries.png",
    },
    {
      name: "cheeseburger",
      img: "ress/img/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "ress/img/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "ress/img/hotdog.png",
    },
    {
      name: "hotdog",
      img: "ress/img/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "ress/img/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "ress/img/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "img/milkshake.png",
    },
    {
      name: "milkshake",
      img: "ress/img/milkshake.png",
    },
    {
      name: "pizza",
      img: "ress/img/pizza.png",
    },
    {
      name: "pizza",
      img: "ress/img/pizza.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // creating the game board
  const createBoard = () => {
    for (let index = 0; index < cardArray.length; index++) {
      var card = document.createElement("img");
      card.setAttribute("src", "ress/img/blank.png");
      card.setAttribute("class", "blank-img");
      card.setAttribute("data-id", index);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };

  //   check for matches
  const checkForMatch = () => {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "ress/img/white.png");
      cards[optionTwoId].setAttribute("src", "ress/img/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "ress/img/blank.png");
      cards[optionTwoId].setAttribute("src", "ress/img/blank.png");
      alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "congratulations! you found them all!";
    }
  };

  
  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };
  createBoard();
});
