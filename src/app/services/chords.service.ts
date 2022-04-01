import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {

  private chords: any = [
    {
      id: 0,
      name: '?',
      nextChordIds: [0]
    },
    {
      id: 1,
      name: 'I',
      nextChordIds: [0, 2, 3, 4, 5, 6]
    },
    {
      id: 2,
      name: 'ii',
      nextChordIds: [0, 5]
    },
    {
      id: 3,
      name: 'iii',
      nextChordIds: [0, 4, 5, 6]
    },
    {
      id: 4,
      name: 'IV',
      nextChordIds: [0, 2, 5]
    },
    {
      id: 5,
      name: 'V',
      nextChordIds: [0, 1, 6]
    },
    {
      id: 6,
      name: 'vi',
      nextChordIds: [0, 2, 3, 4, 5]
    },
    {
      id: 7,
      name: 'i',
      nextChordIds: [0, 8, 9, 10]
    },
    {
      id: 8,
      name: 'iv',
      nextChordIds: [0, 7, 9]
    },
    {
      id: 9,
      name: 'V',
      nextChordIds: [0, 7, 10]
    },
    {
      id: 10,
      name: 'bVI',
      nextChordIds: [0, 8, 9]
    },
  ];

  constructor() { }

  getChords() {
    return this.chords;
  }
}
