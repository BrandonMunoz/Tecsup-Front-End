import { Component } from '@angular/core';

@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent{
    public credentials = {
        email: "asd",
        password: "asd",
        name: "asdasd"
    }
    constructor(){}
}