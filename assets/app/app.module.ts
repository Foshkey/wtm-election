import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BallotComponent } from './ballot/ballot.component';
import { CardComponent } from './ballot/card.component';
import { CandidateService } from './common/candidate.service';
import { CharacterService } from './common/character.service';
import { LandingComponent } from './landing/landing.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    DragulaModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BallotComponent,
    CardComponent,
    LandingComponent,
    TopBarComponent
  ],
  providers: [
    CandidateService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
