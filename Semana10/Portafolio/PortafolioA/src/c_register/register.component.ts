import { Component, Output } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';
@Component({
    selector:'register',
    templateUrl:'../c_login/login.component.html',
    providers:[AuthenticationService]
})

export class RegisterComponent{
    public credentials = {
        email: "asd",
        password: "asd",
        name: "asdasd"
    }

    public newCredentials;

    public registrado:Boolean;

    constructor(private _auth:AuthenticationService){
        console.log(this.credentials.email);
    }

    public onRegistrar():void{
        this._auth.register(this.credentials).subscribe((response)=>{
            console.log("TOKEN GUARDADO");
            console.log(response);
            this._auth.saveToken(response.token);
            
            this.newCredentials = this._auth.getUserDetails();
            this.registrado = true;
        },(err)=>{
            console.log("ERROR AL REGISTRARSE");
        })
    }
}