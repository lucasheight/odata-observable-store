import { Component, OnInit, OnDestroy } from "@angular/core";
import { PeopleService } from "../services/people.service";
import { map, switchMap, shareReplay } from "rxjs/operators";
import { OperatorFunction, Observable, Subject } from "rxjs";
import { IOdataCollection } from "odata-observable-store";
import {
  GridDataResult,
  DataStateChangeEvent,
  GridComponent,
  EditEvent,
  CancelEvent,
  RemoveEvent,
  SaveEvent,
  AddEvent
} from "@progress/kendo-angular-grid";
import { State, toODataString } from "@progress/kendo-data-query";
import { IPeople } from "../services/IPeople";
import { FormGroup, FormControl, Validators } from "@angular/forms";

/**Maps an array or IOdataCollection to a kendo GridDataResult
 * @param count {number} overides the count from the array length or odata.count returned from request
 * @returns OperatorFunction
 */
export const gridMap = <T>(
  count: number = undefined
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
): OperatorFunction<IOdataCollection<T> | T[], GridDataResult> => input$ =>
  input$.pipe(
    map(m =>
      Array.isArray(m)
        ? ({ data: m, total: count || m.length } as GridDataResult)
        : ({
            data: m.value,
            total: count || m["@odata.count"]
          } as GridDataResult)
    )
  );

@Component({
  selector: "app-kendo-grid",
  templateUrl: "./kendo-grid.component.html",
  styles: [],
  providers: [PeopleService]
})
export class KendoGridComponent implements OnInit, OnDestroy {
  data$: Observable<GridDataResult>;
  count$: Observable<number>;
  gridState: State = { skip: 0, take: 5 };
  editRowIndex: number;
  fGroup = new FormGroup({
    UserName: new FormControl("", Validators.required),
    FirstName: new FormControl("", Validators.required),
    MiddleName: new FormControl(""),
    LastName: new FormControl("", Validators.required)
  });
  loading: boolean = false;
  destroy$: Subject<void> = new Subject();
  constructor(private peopleService: PeopleService) {}
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  ngOnInit(): void {
    //Work around for the lack of support on $count on the example odata service.
    this.count$ = this.peopleService.count().pipe(shareReplay());
    this.data$ = this.count$.pipe(
      switchMap(count => this.peopleService.state$.pipe(gridMap(count)))
    );
    this.peopleService.complete = (): void => {
      this.loading = false;
    };
    this.onStateChange(this.gridState as DataStateChangeEvent);
  }
  public onStateChange = (e: DataStateChangeEvent): void => {
    this.gridState = e;
    /**remove the $count from string as the example service does not support the $count parameter
     * See the count$ observable in onInit for a work around;
     */
    const reg: RegExp = /\$count=true/gi;
    const query: string = toODataString(this.gridState).replace(reg, "");
    this.peopleService.query(query);
  };
  private closeRow = (
    sender: GridComponent,
    idx: number = this.editRowIndex
  ): void => {
    sender.closeRow(idx);
    this.fGroup.reset();
  };
  onAdd = (e: AddEvent): void => {
    this.fGroup.reset();
    this.fGroup.get("UserName").enable();
    e.sender.addRow(this.fGroup);
  };
  onEdit = (e: EditEvent): void => {
    this.editRowIndex = e.rowIndex;
    const item: IPeople = e.dataItem;
    this.fGroup.setValue({
      UserName: item.UserName,
      FirstName: item.FirstName,
      LastName: item.LastName,
      MiddleName: item.MiddleName
    });
    this.fGroup.get("UserName").disable();
    e.sender.editRow(e.rowIndex, this.fGroup);
  };
  onCancel = (e: CancelEvent): void => {
    this.closeRow(e.sender, e.rowIndex);
  };
  onRemove = (e: RemoveEvent): void => {
    this.loading = true;
    const item: IPeople = e.dataItem;
    this.peopleService.remove(item, "UserName");
    this.closeRow(e.sender, e.rowIndex);
  };
  onSave = (e: SaveEvent): void => {
    this.loading = true;
    const item: IPeople = e.formGroup.value;
    const raw = e.formGroup.getRawValue();
    if (e.isNew) {
      this.peopleService.insert(item);
    } else {
      item.UserName = raw.UserName;
      this.peopleService.update(item, "UserName");
    }
    this.closeRow(e.sender, e.rowIndex);
  };
}
