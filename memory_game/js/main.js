const cards = [cardFactory("queen", "hearts", "images/queen-of-hearts.png"), cardFactory("queen", "diamonds", "images/queen-of-diamonds.png"), cardFactory("king", "hearts", "images/king-of-hearts.png"), cardFactory("king", "diamonds", "images/king-of-diamonds.png")];
let cardsInPlay = [];
let playerScore = 0;

function cardFactory(rank, suit, cardImage) {
	return {
		rank: rank,
		suit: suit,
		cardImage: cardImage};
}

function createBoard() {
	cardsInPlay = [];
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		console.log(cardElement);
	}
}

function resetBoard() {
	document.getElementById("game-board").innerHTML = "";
	createBoard();
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		playerScore++;
		document.getElementById("score").innerHTML = `Score : ${playerScore}`;
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard() {
	const cardId = this.getAttribute("data-id");
	const flipped = cards[cardId];
	cardsInPlay.push(flipped.rank);
	this.setAttribute("src", flipped.cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

createBoard();

resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetBoard);