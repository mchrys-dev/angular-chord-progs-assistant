import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  private keys: any = [
    {
      id: 1,
      tonicName: 'C',
      I: 'C',
      i: 'Cm',
      ii: 'Dm',
      iii: 'Em',
      IV: 'F',
      iv: 'Fm',
      V: 'G',
      vi: 'Am',
      bVI: 'Ab'
    }
  ];

  constructor() { }

  getkeys() {
    return this.keys;
  }
}
