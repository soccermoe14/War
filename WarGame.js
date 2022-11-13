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

const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades']; //declare variable that conatains array of string values for cards suits
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];//declare variable that contains array of string values for card ranks
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //declare variable that contains array of numerical values for cards to keep score

class Card { //blueprint for what cards are comprised of
    constructor(cardSuit, cardValue, cardRank) {
        this.cardSuit = cardSuit;
        this.cardRank = cardRank;
        this.cardValue = cardValue;
    }
}


class Deck { //blue print for what deck of cards is comprised of
    constructor() {
        this.cards = []; //declares cards object as open array to pass card class values through in order to create deck

            for (let suit in suits) {
                for (let rank in ranks) {
                    for (let value in values)
                    this.cards.push(new Card(suits[suit], ranks[rank], values[value]));
            }
        }
    }

//function to shuffle the cards that I really do not understand and copied it from the internet. JavaScript does not have a preprogrammed funtion for shuffling. 
//Apparently the best way to get randomized (shuffled) cards is to use the Fisher-Yates method. But I only got that to work building the deck a different way. 
    shuffleDeck() {
        let location1, location2, tmp; //just like when shuffling by hand, you have cards in right hand and cards in left hand, then a final pile once combined
        for (let i = 0; i < 1000; i++) { //for loop that iterates the cards 1000 times in order to randomize
            location1 = Math.floor((Math.random() * this.cards.length)); //array cards.length should take all the suits multiplied by all the ranks; equalling 52 cards tota;
            location2 = Math.floor((Math.random() * this.cards.length));
            //^^math random generates random number while math floor returns the number by decreasing the value to the nearest integer
                tmp = this.cards[location1];
                this.cards[location1] = this.cards[location2]; //generates random number and swaps the cards...I think
                this.cards[location2] = tmp; 
        }
    }
}

//Player class that holds the players hand of value for the player score
class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
}

const warDeck = new Deck(); //declares variable for a new deck of cards
warDeck.shuffleDeck(); //creates a new deck of cards and calls the shuffle function

let p1 = new Player(); //declares variable for player one
let p2 = new Player(); //declares variable for player two

function dealDeck(warDeck) { //function to divide half of the shuffled cards evenly amognst players 1 & 2
    let dividedDeck = Math.ceil(warDeck.cards.length / 2); //declares variable that divides the deck of cards and rounds up to the nearest integer
p1.hand = warDeck.cards.slice(0, dividedDeck); //declares player 1's hand passing through array and return index 0 thru the halfway point (dividedDeck)
p2.hand = warDeck.cards.slice(-dividedDeck); //declares player 2's hand by passing through the array and returning the other half of the dividedDeck
}


dealDeck(warDeck); //calls the function to deal the cards into a new deck


console.log("Let's play war!!!"); //start of game play (game logic) now that we have a deck of cards that has been shuffled and dealt between 2 players

for (let i = 0; i < 26; i++) { //for loop to iterate through each players hand (26 iterations  for half the deck of cards)

    const p1Card = p1.hand.pop();//removes 1 card from player's hand to play turn
    const p2Card = p1.hand.pop();//removes 1 card from the player's hand to play turn

    //below: prints the round of play based on the iteration, increasing by 1 after each iteration (turn) and displays the card each player has turned over for that round
    console.log(`Round ${(i + 1)}\n 
    Player 1: ${p1Card.cardRank} of ${p1Card.cardSuit}\n
    Player 2: ${p2Card.cardRank} of ${p2Card.cardSuit}\n`);

    //below: this else if loop is supposed to compare the values of each card played and determine the winner based on the player with the highest value card
    //subsequently printing the winner to the console as well as a comparison of each players score for the cards played that round
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
        } else //else statement that would execute if both players cards were of equal value
                console.log(`Tie for round ${(i + 1)}\n
            Player 1 Score = ${p1.score} vs Player 2 Score = ${p2.score}\n`);
        }

    //below: once all iterations of turn are completed, this should print the game over as well as the final score and declare a winner based on which player has the higher score
    
    console.log(`Game Over!!!\n
    Player 1 Final Score = ${p1.score} vs Player 2 Final Score = ${p2.score}`);
    if (p1.score > p2.score) {
        console.log(`Player 1 is the winner!!!`);
    } else if (p1.score < p2.score) {
        console.log(`Player 2 is the winner!!!`);
    } else {
        console.log(`Tie game, no winners...try again!`);
}
        



