export class Card {
    suit: Suit
    value: CardValue
    points: number

    constructor(suit: Suit, value: CardValue) {
        this.suit = suit
        this.value = value
        this.points = 0
    }
}

enum Suit {
    heart = 1,
    diamond = 2,
    spades = 3,
    clubs = 4
}

enum CardValue {
    seven = 1,
    eight,
    nine,
    ten,
    jack,
    queen,
    king,
    ace
}