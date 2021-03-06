import { CharacterService } from '../common/character.service';
import { Character } from '../models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  character: Character;
  logoutUrl = '/logout';
  portraitUrl: string;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.getChar().then(character => {
      this.character = character;
      this.portraitUrl = `//imageserver.eveonline.com/Character/${this.character.characterID}_32.jpg`;
    });
  }
}
