import {  AbstractControl, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';


//al comparar elementos de un mismo formulario debo usar formgroup
export const SonIguales : ValidatorFn = (
  formGroupControl: AbstractControl<{pass: string; confirmarpass: string}>
): ValidationErrors | null => {
  const pass = formGroupControl.value.pass;
  const confirmarpass = formGroupControl.value.confirmarpass;


  return pass !== confirmarpass ? {SonIguales: true} : null;

  };
