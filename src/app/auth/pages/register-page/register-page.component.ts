import { Component, inject, signal } from '@angular/core';
import { UserDto } from '../../interfaces/userdto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {


  private fb = inject(FormBuilder);
  
  private validatorsService = inject(ValidatorService); 
  private authService = inject( AuthService );
  private router = inject(Router);

  public enviandoFormulario = false;
  public mensajeError = '';



  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidator() ]],
    email: ['', [ 
      Validators.required, 
      Validators.pattern( this.validatorsService.emailPattern )
    ], [  ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
    ]
  });


  constructor(
  
  ) {}

  isValidField( field: string ) {
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit() {
    // Abc123
    

    this.myForm.markAllAsTouched();

    this.mensajeError = '';

    if ( this.enviandoFormulario === true || this.myForm.invalid ) return;

    this.enviandoFormulario = true;

    const newUser: UserDto = {
      email: this.myForm.controls['email'].value,
      fullName: this.myForm.controls['name'].value,
      password: this.myForm.controls['password'].value,

    }


    console.log( newUser );

    this.authService.register( newUser ).subscribe( resp => {

      console.log( resp ); 
      
      this.enviandoFormulario = false;

      if (!resp ) {
        this.mensajeError = 'Ha habido un error en el registro.';
        setInterval(() => {
          this.mensajeError = '';
        }, 4000);
      } else {
        this.router.navigateByUrl('/');
      }
      

    })

    


  }


}
