import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SingInFormComponent } from '../sing-in-form/sing-in-form.component';
import { SingUpFormComponent } from '../sing-up-form/sing-up-form.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,HeaderComponent, SingInFormComponent, SingUpFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  signUpMode: boolean = false;
  shouldShowForm: boolean = false;
  


  

  toggleSignUpMode() {
    this.signUpMode = !this.signUpMode;
    
    setTimeout(() => {
      this.shouldShowForm = !this.shouldShowForm;
    }, 1000);
    
  }

}
