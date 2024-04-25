import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-cuentas',
  standalone: true,
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css',
  imports: [CommonModule, RouterLink]
})
export class CuentasComponent {

}
