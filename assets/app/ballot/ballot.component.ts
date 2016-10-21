import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { CandidateService } from '../common/candidate.service';
import { Character } from '../models/character';

@Component({
  moduleId: module.id,
  selector: 'ballot',
  styleUrls: ['ballot.component.css'],
  templateUrl: 'ballot.component.html'
})
export class BallotComponent implements OnInit {

  candidates: Character[] = [];
  ballot: Character[] = [];

  constructor(
    private candidateService: CandidateService,
    private dragulaService: DragulaService
  ) { }

  ngOnInit() {
    this.candidateService.getCandidates().then(candidates => this.candidates = candidates);
    this.dragulaService.dropModel.subscribe(value => { this.onDropModel(value.slice(1)); } );
    this.dragulaService.removeModel.subscribe(value => { this.onRemoveModel(value.slice(1)); } );
  }

  private onDropModel(args): void {
    // let [el, target, source] = args;
  }

  private onRemoveModel(args): void {
    // let [el, target, source] = args;
  }
}
