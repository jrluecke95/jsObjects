class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getImageUrl() {
    return `images/${this.rank}_of_${this.suit}.png`
  }
}

const fiveDiamonds = new Card(5, 'diamonds');
const tenClubs = new Card(10, 'clubs');

// console.log(fiveDiamonds.getImageUrl());
// console.log(tenClubs)

class Hand {
  hand = [];
  addCard(card) {
    this.hand.push(card)
  }
  getPoints() {
    let points = 0;
    this.hand.map(card => {
      points += card.rank
    })
    return points
  }
}

let firstHand = new Hand();
firstHand.addCard(new Card(5, 'diamonds'));
firstHand.addCard(new Card(6, 'clubs'));
console.log(firstHand.getPoints())

class Deck {
  suits = ['diamonds', 'clubs', 'hearts', 'spades'];
  constructor() {
    this.cards = [];
    this.suits.map(suit => {
      for (let i = 1; i < 14; i++) {
        this.cards.push(new Card(i, suit))
      }
    })
  }
  draw() {
    return this.cards.pop();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    } 
  return this.cards
  }

  numCardsLeft() {
    let num = 0;
    for (this.card in this.cards) {
      num++
    }
    return num
  }
}

let myDeck = new Deck()
console.log(myDeck)
console.log(myDeck.draw())
console.log(myDeck.shuffle())
console.log(myDeck.numCardsLeft())
console.log(myDeck.draw())
console.log(myDeck.numCardsLeft())