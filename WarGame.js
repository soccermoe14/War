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


class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
//function to create a deck of cards 
    createDeck() {
        let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//nested for loop that loops thorugh ranks then suits and creates new array including values
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j< ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values [j]));
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

//Player class that will pass through the array (deal) the shuffled deck of cards
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class War {
    constructor() {
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck;
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }

    
 }


let warGame = new War();/*declares a variable that calls the war class which will run all the functions to create
a deck of 52 cards, shuffle the deck, create 2 players, deal 26 shuffled cards to each player*/

warGame.start('Marin', 'Taylor');
console.log(warGame.players);

/*Below are testing notes from going through above code -- 
const d = new Deck();//declares variable that calls the create deck function
d.createDeck();//calls create deck funtion to d (new Deck0 variable)
d.shuffleDeck()//calls shuffle funcion to d (new Deck) variable
console.log(d.cards); //prints deck of 52 cards with suit, rank, and value of card; shuffled*/

//Now that the players have 26 cards each, need to initiate game play





