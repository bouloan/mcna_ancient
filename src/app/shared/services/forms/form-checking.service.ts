import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCheckingService {

  constructor() { }

  forbiddenValues(forbiddenData) {
    return (control: FormControl): { [s: string]: boolean } => {
      if (forbiddenData.indexOf(control.value) !== -1) {
        return { 'dataIsForbidden': true };
      } else {
        return null;
      }
    };
  }

  rejectInteger() {
    return (control: FormControl): { [s: string]: boolean } => {
      if (control.value && !isNaN(control.value)) {
        return { 'integerPresence': true };
      } else {
        return null;
      }
    }
  }

}
