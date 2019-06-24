import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { FormCheckingService } from '@services/forms/form-checking.service';
import { ModalService } from '@services/modals/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  private _unsubscribe$: Subject<void>;

  constructor(
    private _modalService: ModalService,
    private _formCheckingService: FormCheckingService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public onFormSubmit() {
    this.loginForm.status !== 'INVALID' ? console.log('ok') : console.log('notok');
    if (this.loginForm.status === 'VALID') {
      this._authService
        .loginUser(this.loginForm.value)
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this._modalService.destroy();
          },
          err =>
            console.error(
              `the connexion to the API did not succeed and got the following error: ${err.message}`
            )
        );
    }
  }

  public close() {
    this._modalService.destroy();
    this._router.navigate(['/']);
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
