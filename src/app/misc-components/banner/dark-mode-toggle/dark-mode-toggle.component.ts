import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  isDarkMode = false;

  systemDarkModeAlreadyOn = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  constructor (private darkModeService: DarkModeService) {
    this.darkMode$.subscribe(event => this.isDarkMode = event);

    this.systemDarkModeAlreadyOn ? this.darkModeService.enable() : this.darkModeService.disable(); //Auto-detect system dark mode setting.
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
