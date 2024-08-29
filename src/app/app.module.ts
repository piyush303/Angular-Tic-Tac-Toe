import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TicTacToeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
