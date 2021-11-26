import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public emailPattern:string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  public nombreApellido:string='([a-zA-Z]+) ([a-zA-Z]+)'; 


  registerForm:FormGroup = this.formBuilder.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellido)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });

  constructor( private  formBuilder:FormBuilder,) { }

  ngOnInit() {
  }

  //mensajes de error en el input de email
  campoInvalido(campo:string){
    return this.registerForm.get(campo)?.invalid
              && this.registerForm.get(campo)?.touched;
   }

   get emailErrorMsg():string{
    const errors = this.registerForm.get('email')?.errors;
    if(errors?.required){
      return 'Por favor ingrese un correo electronico'
                  }else if(errors?.pattern){
      return 'Por favor ingrese un coreo valido'
     }
    return '';
  }

  get nameErrorMsg():string{
    const errors = this.registerForm.get('nombre')?.errors;
    if(errors?.required){
      return 'Por favor ingrese un nombre'
                  }else if(errors?.pattern){
      return 'Formato Nombre y Apellido'
     }
    return '';
  }

  registerUser(){}

}
