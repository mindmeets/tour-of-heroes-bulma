import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  isMenuOpen = false;
  
  public handleBurger() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

