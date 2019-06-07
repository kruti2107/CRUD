import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}
