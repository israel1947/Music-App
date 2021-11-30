import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  constructor( private  formBuilder:FormBuilder,
               private  router:Router,
               private  authService:AuthService) { }

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

  //registrar usuario y redirigir hasta login
  registerUser(userData:any){
    this.authService.registrarUser(userData).then(()=>{
      this.GoToLogin();
    });
    console.log(userData);
  }

  //volver hasta el componente de login presionando el boton back
  GoToLogin(){
    this.router.navigate(['/login'], { skipLocationChange: true });
  }

}
