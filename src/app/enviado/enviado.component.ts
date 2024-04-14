import { Component } from '@angular/core';

@Component({
  selector: 'app-enviado',
  standalone: true,
  imports: [],
  templateUrl: './enviado.component.html',
  styleUrl: './enviado.component.css'
})
export class EnviadoComponent {
  email: string = '';


  ngOnInit() {
    // Access localStorage here:
    const email = localStorage.getItem('email');
    if (email) {
      this.email = email;
    } else {
      return
    }
  
}

}
