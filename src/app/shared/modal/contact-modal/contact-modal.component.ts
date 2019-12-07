import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { apiUrl } from "@parameters/api-url";
import { FormCheckingService } from "@services/forms/form-checking.service";
import { ModalService } from "@services/modals/modal.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-contact-modal",
  templateUrl: "./contact-modal.component.html",
  styleUrls: ["./contact-modal.component.scss"]
})
export class ContactModalComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  invalidName: string[] = ["ss"];

  private _unsubscribe$: Subject<void>;

  constructor(
    private _modalService: ModalService,
    private _formCheckingService: FormCheckingService,
    private _http: HttpClient
  ) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();

    this.contactForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      name: new FormControl(null, [
        Validators.required,
        this._formCheckingService.forbiddenValues(this.invalidName),
        this._formCheckingService.rejectInteger()
      ]),
      // tslint:disable-next-line: max-line-length
      firstName: new FormControl(null, [
        Validators.required,
        this._formCheckingService.forbiddenValues(this.invalidName),
        this._formCheckingService.rejectInteger()
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // tslint:disable-next-line: quotemark
      telephone: new FormControl(
        null,
        Validators.pattern(
          "^0[1-6]{1}(([0-9]{2}){4})|((s[0-9]{2}){4})|((-[0-9]{2}){4})$"
        )
      ),
      message: new FormControl(null, [Validators.required])
    });

    this.contactForm.valueChanges.pipe(takeUntil(this._unsubscribe$)).subscribe(
      value => console.log(value),
      error => console.log(error)
    );
  }

  public close() {
    this._modalService.destroy();
  }

  public onFormSubmit() {
    if (this.contactForm.status === "VALID") {
      this._http
        .post<any>(`${apiUrl}contact-message`, this.contactForm.value)
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe(
          res => {
            console.log("message envoyé");
          },
          err => {
            console.error(err);
          }
        );
    }
    // this._modalService.destroy();
    // this.contactForm.reset();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
