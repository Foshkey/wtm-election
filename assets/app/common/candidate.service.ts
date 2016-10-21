import { Injectable } from '@angular/core';

import { Character } from '../models/character';

@Injectable()
export class CandidateService {

  constructor() { }

  getCandidates(): Promise<Character[]> {
    return Promise.resolve([
      { characterID: 1, characterName: 'John Smith' },
      { characterID: 1, characterName: 'Sam Carter' },
      { characterID: 1, characterName: 'Elon Musk' },
      { characterID: 1, characterName: 'Brad Shoemaker' },
      { characterID: 1, characterName: 'Jeff Gerstman' },
      { characterID: 1, characterName: 'Alex Newman' },
      { characterID: 1, characterName: 'Thomas Anderson' },
      { characterID: 1, characterName: 'Riley Stoner' }
    ]);
  }
}
