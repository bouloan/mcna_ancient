import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormCheckingService } from 'src/app/services/form-checking.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  contactForm: FormGroup;
  invalidName: string[] = ['ss'];

  constructor(private modalService: ModalService, public formCheckingService: FormCheckingService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      'name': new FormControl(null, [Validators.required, this.formCheckingService.forbiddenValues(this.invalidName), this.formCheckingService.rejectInteger()]),
      // tslint:disable-next-line: max-line-length
      'firstName': new FormControl(null, [Validators.required, this.formCheckingService.forbiddenValues(this.invalidName), this.formCheckingService.rejectInteger()]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // tslint:disable-next-line: quotemark
      'telephone': new FormControl(null, Validators.pattern("^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$"))
    });

    this.contactForm.valueChanges.subscribe(
      (value) => console.log(value),
      (error) => console.log(error)
    );
  }

  public close() {
    this.modalService.destroy();
  }

  onFormSubmit() {
    console.log(this.contactForm);
    // this.contactForm.reset();
  }

  onFormCancel() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }




}
