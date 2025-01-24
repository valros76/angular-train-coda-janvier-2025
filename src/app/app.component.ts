import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { interval, Observable, map, filter, tap } from "rxjs";
import { ObservablesPreview } from './models/observables-preview.model';
import { ObservablesPreviewComponent } from './observables-preview/observables-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    ObservablesPreviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // interval$!:Observable<number|string>;
  observableMergeMap!: ObservablesPreview;
  observableSwitchMap!: ObservablesPreview;
  observableConcatMap!: ObservablesPreview;
  observableExhaustMap!: ObservablesPreview;

  ngOnInit(): void {
    // this.interval$ = interval(1000).pipe(
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ? `${value} = Pair` : `${value} = Impair`),
    //   tap(text => this.debugLogger(text)),
    // );
    this.observableMergeMap = new ObservablesPreview(
      "Exemple mergeMap",
      "🥇",
      "🥈",
      "Launch 🥇",
      "Launch 🥈",
      "🥇 / 🥈",
      "mergeMapObservable"
    );

    this.observableConcatMap = new ObservablesPreview(
      "Exemple concatMap",
      "🥇",
      "🥈",
      "Launch 🥇",
      "Launch 🥈",
      "🥇 / 🥈",
      "concatMapObservable"
    );

    this.observableExhaustMap = new ObservablesPreview(
      "Exemple exhaustMap",
      "🥇",
      "🥈",
      "Launch 🥇",
      "Launch 🥈",
      "🥇 / 🥈",
      "exhaustMapObservable"
    );

    this.observableSwitchMap = new ObservablesPreview(
      "Exemple switchMap",
      "🥇",
      "🥈",
      "Launch 🥇",
      "Launch 🥈",
      "🥇 / 🥈",
      "switchMapObservable"
    );

  }

  // debugLogger(text: string){
  //   console.log(`DEBUG LOG: ${text}.`);
  // }

}
