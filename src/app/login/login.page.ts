import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

const PrimaryWhite = '#42d77d';
const SecondaryGrey = '#ccc';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any> | undefined;
  public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
  public loading = false;
  
  public emailPattern:string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";


  loginForm:FormGroup = this.formBuilder.group({
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });

  constructor(private  formBuilder:FormBuilder,
              private  authServices:AuthService,
              private  navCtrl:NavController,
              private  storage:Storage,) { }

  ngOnInit() {
  }


  //mensajes de error en el input de email
  campoInvalido(campo:string){
    return this.loginForm.get(campo)?.invalid
              && this.loginForm.get(campo)?.touched;
   }

   get emailErrorMsg():string{
    const errors = this.loginForm.get('email')?.errors;
    if(errors?.required){
      return 'Por favor ingrese un correo electronico'
                  }else if(errors?.pattern){
      return 'Por favor ingrese un coreo valido'
     }
    return '';
  }

  errorMesage:string="";

   /*loginUser(credenciales:any){
    this.loading = true;
   //si el inicio de sesión es correcto el usuario sera redirigido al home
   this.authServices.loginUser(credenciales).then(resp=>{
    this.errorMesage= '';
    this.navCtrl.navigateForward("/menu/home");
    this.storage.create();
    this.storage.set('isUserLogged',true);

   }).catch(error=>{//caso contrario arrojara un error de login en pantalla
     this.errorMesage=error;
     this.loading = false;
   });
  }*/
  
  async loginUser(credenciales:any){
    try {
      this.loading = true;
      this.authServices.loginUser(credenciales).then(resp=>{
        this.errorMesage= '';
        this.navCtrl.navigateForward("/menu/home");
        this.storage.create();
        this.storage.set('isUserLogged',true);
     })
     
    } catch (error) {
      this.errorMesage=error;
     this.loading = false;
    }
  }

}
