import { Component, OnInit } from '@angular/core';
import { ChordsService } from '../services/chords.service';
import { KeysService } from '../services/keys.service';
import { ScaletypesService } from '../services/scaletypes.service';
import { TextsService } from '../services/texts.service';
import { WebaudioService } from '../services/webaudio.service';

@Component({
  selector: 'app-createprog',
  templateUrl: './createprog.component.html',
  styleUrls: ['./createprog.component.scss']
})
export class CreateprogComponent implements OnInit {

  scaleTypes: any[] = [];
  selScaleType: any = {};
  chords: any[] = [];
  phrasesChords: any[] = [];
  keys: any[] = [];

  chordIndex: number = 0;

  C: any = null;
  Dm: any = null;
  sounds: any[] = ['C', 'Dm'];
  buffer: any = null;
  audioCtx = new AudioContext();

  constructor(
    private scaleTypesService: ScaletypesService,
    private chordService: ChordsService,
    private keysService: KeysService,
    private textsService: TextsService,
    private webAudioService: WebaudioService
  ) { }

  ngOnInit(): void {
    this.scaleTypes = this.scaleTypesService.getScaleTypes();
    this.selScaleType = this.scaleTypes[0];
    this.chords = this.chordService.getChords();

    this.phrasesChords = [
      this.chords.find(chord => chord.id === 1), 
      this.chords.find(chord => chord.id === 0),
      this.chords.find(chord => chord.id === 0),
      this.chords.find(chord => chord.id === 0), 
      this.chords.find(chord => chord.id === 0),
    ];

    this.keys = this.keysService.getkeys();
  }

  public getTonicChord(id: any) {
    return this.chords.find(chord => chord.id === id);
  }

  public getChord(id: any) {
    return this.chords.find(chord => chord.id === id);
  }

  public getChords(ids: any) {
    return this.chords.filter(chord => ids.includes(chord.id));
  }

  public initPhrase() {
    this.phrasesChords[0] = this.chords.find(chord => chord.id === this.selScaleType.tonicId);
    this.initAllChords();
  }

  public initAllChords() {
    for(let i=1; i<this.phrasesChords.length; i++) {
      this.phrasesChords[i] = this.chords.find(chord => chord.id === 0);
    }
  }

  public initNextChords(index: any) {
    for(let i=index+2; i<this.phrasesChords.length; i++) {
      this.phrasesChords[i] = this.chords.find(chord => chord.id === 0);
    }
  }

  public playPhrase(this: any) {
    // On arrête toutes les sources actives
    this.webAudioService.stopAll();
    // On réinitialise l'array de sources
    this.webAudioService.sources = [];
    // On joue chaque source
    this.phrasesChords.forEach(function(this: any, chord: any, index: any) {
      this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[index].name]], 1.5*index);
    }.bind(this));
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[0].name]], 0);
    // this.webAudioService.play(this.webAudioService[this.keys[0][this.phrasesChords[1].name]], 1.5);
  }

}

  

 
