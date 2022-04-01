import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  private lang: string = '';
  private texts: any = {
    appTitle: {
      en: 'Chord progs assistant',
      fr: 'Assistant de progressions d\'accords'
    }
  };

  constructor() { 
    // On définit la langue 
    navigator.language.split('-')[0] === 'fr' ? this.lang = 'fr' : this.lang = 'en';
  }

  getText(key: string) {
    return this.texts[key][this.lang];
  }

  getLang() {
    return this.lang;
  }
}
