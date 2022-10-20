document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name : 'fries',
            img: "ress/img/fries.png"
        },
        {
            name : 'fries',
            img: "ress/img/fries.png"
        },
        {
            name: "cheeseburger",
            img: "ress/img/cheeseburger.png"
        },
        {
            name: "cheeseburger",
            img: "ress/img/cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "ress/img/hotdog.png"
        },
        {
            name: "hotdog",
            img: "ress/img/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "ress/img/ice-cream.png"
        },
        {
            name: "ice-cream",
            img: "ress/img/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "img/milkshake.png"
        },
        {
            name: "milkshake",
            img: "ress/img/milkshake.png"
        },
        {
            name: "pizza",
            img: "ress/img/pizza.png"
        },
        {
            name: "pizza",
            img: "ress/img/pizza.png"
        },
    ]
    const grid = document.querySelector('.grid')

// creating the game board
function createBoard() {
    for (let index = 0; index < cardArray.length; index++) {
        var card = document.createElement("img")
        card.setAttribute("src", "ress/img/blank.png")
        card.setAttribute("data-id", index)
        // card.addEventListener("click", flipCard())
        grid.appendChild(card)
    }
};

createBoard()
})

