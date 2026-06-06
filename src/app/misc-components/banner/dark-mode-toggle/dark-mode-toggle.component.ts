import { Component } from '@angular/core';

const DARK_MODE_KEY = 'darkMode';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
  standalone: false
})
export class DarkModeToggleComponent {
  isDarkMode = false;

  constructor() {
    // Initial state is set by the inline script in index.html (body class).
    // Sync our flag from current DOM class (or localStorage as fallback).
    this.isDarkMode = document.body.classList.contains('dark-mode');
  }

  onToggle(): void {
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    try {
      localStorage.setItem(DARK_MODE_KEY, this.isDarkMode ? 'true' : 'false');
    } catch (e) {
      // localStorage may be unavailable (private mode etc.)
    }
  }
}
