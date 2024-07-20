import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkTheme = false;
  isDropdownVisible = false;
  selectedFont = 'Sans Serif';

// themeSwitching
  toggleTheme() {
    console.log("hey");
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('darkTheme');
    } else {
      document.body.classList.remove('darkTheme');
    }
  }

  // fontSwitching
  

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  
  changeFont(font: string) {
    this.selectedFont = font;
    this.isDropdownVisible = false;
  
    switch (font) {
      case 'Sans Serif':
        document.body.style.fontFamily = 'var(--font-primary)';
        break;
      case 'Serif':
        document.body.style.fontFamily = 'var(--font-secondary)';
        break;
      case 'Mono':
        document.body.style.fontFamily = 'var(--font-tertiary)';
        break;
      default:
        document.body.style.fontFamily = '';
    }
  }

}
