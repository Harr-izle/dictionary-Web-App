import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dictionary-web-app';

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
