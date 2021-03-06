import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentesPro';

  counterProgress = 0;
  totalCountdown = 15;

  updateProgress( $event ) {
    this.counterProgress = ( this.totalCountdown - $event ) / this.totalCountdown * 100;
  }

  countdownFinished() {
    console.log('countdown has finished');
  }
}
