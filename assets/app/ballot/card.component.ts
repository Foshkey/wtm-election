import { Component, Input, OnInit } from '@angular/core';

import { Character } from '../models/character';

@Component({
  moduleId: module.id,
  selector: 'candidate-card',
  styleUrls: ['card.component.css'],
  templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {

  @Input()
  candidate: Character;

  portraitUrl: string;

  constructor() { }

  ngOnInit() {
    this.portraitUrl = '//placehold.it/64x64';
    // this.portraitUrl = `//imageserver.eveonline.com/Character/${this.candidate.characterID}_64.jpg`;
  }
}
