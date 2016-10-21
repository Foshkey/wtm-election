import { Component, OnInit } from '@angular/core';

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
    private candidateService: CandidateService
  ) { }

  ngOnInit() {
    this.candidateService.getCandidates().then(candidates => this.candidates = candidates);
  }
}
