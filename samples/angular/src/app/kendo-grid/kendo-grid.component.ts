import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { OperatorFunction, Observable } from 'rxjs';
import { IOdataCollection } from '@lucasheight/odata-observable-store';
import { GridDataResult } from '@progress/kendo-angular-grid';
/**Maps an array or IOdataCollection to a kendo GridDataResult
 * @param count {number} overides the count from the array length or odata.count returned from request
 * @returns OperatorFunction
 */
export const gridMap = <T>(count: number = undefined): OperatorFunction<IOdataCollection<T> | T[], GridDataResult> =>
  input$ => input$.pipe(map(m => Array.isArray(m) ? <GridDataResult>{ data: m, total: count || m.length } : <GridDataResult>{ data: m.value, total: count || m["@odata.count"] }))

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styles: []
})
export class KendoGridComponent implements OnInit {
  data$: Observable<GridDataResult>;
  count$: Observable<number>;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.count$ = this.peopleService.count().pipe(shareReplay());
    this.data$ = this.count$.pipe(switchMap(count => this.peopleService.state$
      .pipe(gridMap(count))
    ))
      ;

    this.peopleService.query();

  }

}
