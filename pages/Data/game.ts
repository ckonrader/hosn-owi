import { Player } from "./player"

export class Game {
    Players: Player[] = []
    CurrentPlayer: string = ""
    CommonCards: object[] = []
    State: GameState = GameState.WaitingForPlayers
}




enum GameState {
    WaitingForPlayers = 0,
    Playing = 1,
    Ended = 2
}