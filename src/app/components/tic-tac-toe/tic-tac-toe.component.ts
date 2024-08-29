import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css',
})
export class TicTacToeComponent {
  initialGameBoard: Array<null | 'X' | 'O'> = new Array(9).fill(null);

  xIsNext = false;
  nextPlayer: 'X' | 'O' = this.xIsNext ? 'O' : 'X';
  winner: 'X' | 'O' | undefined;

  onClick(index: number): void {
    this.nextPlayer = this.xIsNext ? 'X' : 'O';

    this.initialGameBoard[index] = this.xIsNext ? 'O' : 'X';
    this.xIsNext = !this.xIsNext;

    this.winner = this.calculateWinner(this.initialGameBoard);

    if (this.winner) {
      this.resetGame();
    }
  }

  resetGame() {
    // this.winner = undefined;
    this.xIsNext = false;
    this.initialGameBoard = new Array(9).fill(null);
  }

  calculateWinner(squares: any) {
    const winningMatch = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningMatch.length; i++) {
      const [a, b, c] = winningMatch[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }
}
