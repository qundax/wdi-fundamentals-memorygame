const cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, cardFactory("queen", "diamonds", "images/queen-of-diamonds.png"), cardFactory("king", "hearts", "images/king-of-hearts.png"), cardFactory("king", "diamonds", "images/king-of-diamonds.png")];
const cardsInPlay = [];

function cardFactory(rank, suit, cardImage) {
	return {
		rank: rank,
		suit: suit,
		cardImage: cardImage};
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	const flipped = cards[cardId];
	console.log(`User flipped ${flipped.rank}`);
	console.log(flipped.cardImage);
	console.log(flipped.suit);
	cardsInPlay.push(flipped.name);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);