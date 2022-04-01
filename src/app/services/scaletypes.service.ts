import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScaletypesService {

  private scaleTypes: any[] = [
    {
      id: 1,
      name: {
        en: 'Major',
        fr: 'Majeure'
      },
      tonicId: 1,
      lastChordIds: [1, 5, 6]
    },
    {
      id: 2,
      name: {
        en: 'Harmonic minor',
        fr: 'Mineure harmonique'
      },
      tonicId: 7,
      lastChordIds: [7, 9, 10]
    }
  ];

  constructor() { }

  getScaleTypes() {
    return this.scaleTypes;
  }
}
