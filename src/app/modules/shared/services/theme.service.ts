import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {}

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
debugger
    const event = new CustomEvent('theme-change');
    document.dispatchEvent(event);
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
