import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, pipe } from 'rxjs';
import { takeUntil, map } from "rxjs/operators";
import { FlightsService } from '../services/flights.service';
import { IFlight } from '../services/IFlight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styles: []
})
export class FlightsComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();
  flights$: Observable<IFlight[]>;
  constructor(private flightService: FlightsService) { }

  ngOnInit() {
    this.flights$ = this.flightService.state$.pipe(takeUntil(this.destroy$), map(m => m.value));

    this.flightService.query();
  }

  
  ngOnDestroy() {
    this.destroy$.next();
  }

}
