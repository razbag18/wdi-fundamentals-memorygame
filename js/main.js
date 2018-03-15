console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Variables assigned cards

var cardOne = cards[0];
var cardTwo = cards[2];


//Pushing cards into cards in play

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardTwo);
if(cardsInPlay.length === 2){console.log("player has selected two cards")}
	//Still not sure how to get alert up
	if(cardsInPlay[0] === cardsInPlay[1]){alert("You have found a match!")}
		else{alert("Sorry, try again")};

//

