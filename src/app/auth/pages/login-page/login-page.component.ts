import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  // Formularios por template. El trabajo se hace en mayor parte en el html
  
  // Formularios reactivos. El trabajo se hace en el TS.
  // 1. Decir a angular que incorpore el módulo de formularios reactivos ReactiveFormsModule.
  // 2. Incluir en el componente de ts, el servicio formBuilder que nos ayuda a la creación.
  // 3. Definir en el componente de ts el formulario ( nombre, apellidos, email, edad ) y validaciones
  // 4. Mapear la configuración del componente de ts al html.

  private fb = inject( FormBuilder );

  public isPosting: boolean = false;
  public hasError: boolean = false;
  public mensajeError: string = '';




  public miFormLogin = this.fb.group({

    email: [ '',  [Validators.required, Validators.email ]   ,   ],
    password: [  '', [ Validators.required, Validators.minLength(6)],    ],

  }, );



  onSubmit(): void {

    if ( this.miFormLogin.invalid ) {

      this.hasError = true;
      this.mensajeError = 'El formulario es inválido';
      return;
    }

    this.mensajeError = '';
    this.hasError = false;

    console.log('El formulario es correcto: ', this.miFormLogin.value );

    // llamar al servicio de login y ver si devuelve algo.







  }








}
