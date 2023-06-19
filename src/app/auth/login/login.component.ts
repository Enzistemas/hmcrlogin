import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm=this.formBuilder.group({email:['iva@gmail.com',[Validators.required,Validators.email]],password:['',Validators.required ]})
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
      
  }

    login(){
        if(this.loginForm.valid){
          console.log("Llamar al servicio de login");
        }
        else{
          alert("Error al ingresar los datos")
        }
    }
}
