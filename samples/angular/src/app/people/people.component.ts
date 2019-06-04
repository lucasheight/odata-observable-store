import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, RendererStyleFlags2 } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Subject, Observable, fromEvent } from 'rxjs';
import { IPeople } from '../services/IPeople';
import { takeUntil, map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { action, IStoreNotifier } from '@lucasheight/odata-observable-store';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: [
    "div.wrapper{width:100%;padding:1em}",
    "div.people{border:1px solid lightgrey; width:45%;float:left;margin:4px;padding:5px}",
    "div.people form label{display:inline-block;width:100px; text-align:right}",
    "div.people form div {margin-bottom:5px}",
    "div.buttons{margin-top:2em;text-align:center}"
  ]
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
    Gender: ["", Validators.required]
  });
  isNew: boolean = true;
  @ViewChild("search", { static: false }) searchCtr: ElementRef;

  constructor(private peopleService: PeopleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
    this.message$ = this.peopleService.notifier$.pipe(
      takeUntil(this.destroy$),
      //filter(f => f.action === action.Delete || f.action === action.Insert || f.action === action.Update)
    );
    // this.message$.subscribe(s => {
    //   console.log(s)
    // })
    this.people$ = this.peopleService.state$.pipe(takeUntil(this.destroy$), map(m => m.value));
    this.peopleService.query();

  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  ngAfterViewInit() {

    fromEvent<any>(this.searchCtr.nativeElement, "input")
      .pipe(takeUntil(this.destroy$), debounceTime(300), distinctUntilChanged())
      .subscribe(s => {
        let val: string = s.target.value;
        if (val.length > 0) {
          this.peopleService.queryByFirstName(val);
          //could have done this as well:
          //this.peopleService.query(`$filter=contains(FirstName, '${val}')`)
        }
        else {
          this.peopleService.query();
        }

      }
      )
  }
  public onPerson = (username: string) => {
    this.peopleService.get(<IPeople>{ UserName: username }, "UserName")
      .subscribe(s => {
        this.isNew = false;
        this.formGroup.setValue(
          {
            UserName: s.UserName,
            FirstName: s.FirstName,
            LastName: s.LastName,
            Gender: s.Gender
          });
        this.formGroup.get("UserName").disable();
      })
  }
  public onSave = () => {
    let item: IPeople = this.formGroup.value;

    console.log("save", item)
    this.isNew ? this.peopleService.insert(item) : this.peopleService.patch(item, "UserName");
  }
  public onCancel = () => this.resetForm();

  private resetForm() {
    this.isNew = true;
    this.formGroup.setValue({
      UserName: "",
      FirstName: "",
      LastName: "",
      Gender: ""
    });
    this.formGroup.get("UserName").enable();
  }
}
