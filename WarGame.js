/*Coding Steps:
•	For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
o	You do not need to do anything special when there is a tie in a round.
•	Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
o	You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console.

The completed project should, when executed, do the following:
•	Deal 26 Cards to each Player from a Deck of 52 cards.
•	Iterate through the turns where each Player plays a Card.
•	The Player who played the higher card is awarded a point
o	Ties result in zero points for both Players
•	After all cards have been played, display the score and declare the winner.
•	Write a Unit Test using Mocha and Chai for at least one of the functions you write.*/

const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(cardSuit, cardValue, cardRank) {
        this.cardSuit = cardSuit;
        this.cardRank = cardRank;
        this.cardValue = cardValue;
    }
}


class Deck {
    constructor() {
        this.cards = [];

            for (let suit in suits) {
                for (let rank in ranks) {
                    for (let value in values)
                    this.cards.push(new Card(suits[suit], ranks[rank], values[value]));
            }
        }
    }

//function to shuffle the cards that I really do not understand. 
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
                tmp = this.cards[location1];
                this.cards[location1] = this.cards[location2];
                this.cards[location2] = tmp;
        }
    }
}

//Player class that 
class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
}

const warDeck = new Deck();
warDeck.shuffleDeck();

let p1 = new Player();
let p2 = new Player();

function dealDeck(warDeck) { //function to divide half of the shuffled cards evenly amognst players 1 & 2
    let dividedDeck = Math.ceil(warDeck.cards.length / 2);
p1.hand = warDeck.cards.slice(0, dividedDeck);
p2.hand = warDeck.cards.slice(-dividedDeck);
}


dealDeck(warDeck);
console.log(p1.hand);

console.log("Let's play war!!!"); //start of game play (game logic)

for (let i = 0; i < 26; i++) { 

    const p1Card = p1.hand.pop();//removes 1 card from player's hand
    const p2Card = p1.hand.pop();

    //prints the round by iteration of loop plus 1 for each subsequent turn

    
    console.log(`Round ${(i + 1)}\n 
    Player 1: ${p1Card.cardRank} of ${p1Card.cardSuit}\n
    Player 2: ${p2Card.cardRank} of ${p2Card.cardSuit}\n`);

        if (p1.cardValue > p2.cardValue) {
            p1.score++;
            console.log(`
            Player 1 wins round ${(i + 1)}\n
            Player 1 Score = ${p1.score} vs Player 2 Score = ${p2.score}\n`);
        } else if (p1Card.cardValue < p2.cardValue) {
            p2.score++;
            console.log(`
            Player 2 wins round ${(i + 1)}\n
            Player 1 Score = ${p1.score} vs Player 2 Score = ${p2.score}\n`);
        } else 
                console.log(`Tie for round ${(i + 1)}\n
            Player 1 Score = ${p1.score} vs Player 2 Score = ${p2.score}\n`);
        }
    
    console.log(`Game Over!!!\n
    Player 1 Final Score = ${p1.score} vs Player 2 Final Score = ${p2.score}`);
    if (p1.score > p2.score) {
        console.log(`Player 1 is the winner!!!`);
    } else if (p1.score < p2.score) {
        console.log(`Player 2 is the winner!!!`);
    } else {
        console.log(`Tie game, no winners...try again!`);
}
        



