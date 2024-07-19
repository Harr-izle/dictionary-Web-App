import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkTheme = false;
  toggleTheme() {
    console.log("hey");
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('darkTheme');
    } else {
      document.body.classList.remove('darkTheme');
    }
  }

 

}
