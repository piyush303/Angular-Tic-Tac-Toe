import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',
})
export class SquareComponent {
  xIsNext = true;
  player = input<'X' | 'O' | undefined | null>();

  // player = input();

  onClick = output();
}
