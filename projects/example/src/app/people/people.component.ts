import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { PeopleService } from "../services/people.service";
import { Subject, Observable, fromEvent } from "rxjs";
import { IPeople } from "../services/IPeople";
import {
  takeUntil,
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IStoreNotifier } from "projects/odata-observable-store/src/lib/IStore";

//import { action, IStoreNotifier } from '@lucasheight/odata-observable-store'

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  providers: [PeopleService],
  styles: [
    "div.wrapper{width:100%;padding:1em}",
    "div.people{border:1px solid lightgrey; width:45%;float:left;margin:4px;padding:5px}",
    "div.people form label{display:inline-block;width:100px; text-align:right}",
    "div.people form div {margin-bottom:5px}",
    "div.buttons{margin-top:2em;text-align:center}",
  ],
})
export class PeopleComponent implements OnInit, OnDestroy, AfterViewInit {
  destroy$: Subject<void> = new Subject();
  people$: Observable<IPeople[]>;
  person$: Observable<IPeople>;
  message$: Observable<IStoreNotifier<IPeople>>;
  formGroup: FormGroup = this.fb.group({
    UserName: ["", Validators.required],
    FirstName: ["", Validators.required],
    LastName: ["", Validators.required],
    MiddleName: [""],
  });
  isNew: boolean = true;
  @ViewChild("search") searchCtr: ElementRef;

  constructor(private peopleService: PeopleService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetForm();
    this.message$ = this.peopleService.notifier$.pipe(takeUntil(this.destroy$));

    this.message$
      .pipe(
        takeUntil(this.destroy$),
        filter((f) => f.action === "Delete")
      )
      .subscribe(() => {
        //clear the edit form after a delete
        this.resetForm();
      });

    this.people$ = this.peopleService.state$.pipe(
      takeUntil(this.destroy$),
      map((m) => m.value)
    );
    this.peopleService.query();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromEvent<any>(this.searchCtr.nativeElement, "input")
      .pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged())
      .subscribe((s) => {
        const val: string = s.target.value;
        if (val.length > 0) {
          this.peopleService.queryByFirstName(val);
          //could have done this as well:
          //this.peopleService.query(`$filter=contains(FirstName, '${val}')`)
        } else {
          this.peopleService.query();
        }
      });
  }
  public onPerson = (username: string): void => {
    this.peopleService
      .get({ UserName: username } as IPeople, "UserName")
      .subscribe((s) => {
        this.isNew = false;
        this.formGroup.setValue({
          UserName: s.UserName,
          FirstName: s.FirstName,
          LastName: s.LastName,
          MiddleName: s.MiddleName,
        });
        this.formGroup.get("UserName").disable();
      });
  };
  public onSave = (): void => {
    const item: IPeople = this.formGroup.value;
    item.UserName = this.formGroup.getRawValue().UserName;
    console.log(this.isNew ? "Insert" : "Update", item);
    this.isNew
      ? this.peopleService.insert(item)
      : this.peopleService.patch(item, "UserName");
  };
  public onRemove = (userName: string): void => {
    console.log("remove", userName);
    this.peopleService.remove({ UserName: userName } as IPeople, "UserName");
  };
  public onCancel = (): void => this.resetForm();

  private resetForm(): void {
    this.isNew = true;
    this.formGroup.setValue({
      UserName: "",
      FirstName: "",
      LastName: "",
      MiddleName: "",
    });
    this.formGroup.get("UserName").enable();
  }
}
