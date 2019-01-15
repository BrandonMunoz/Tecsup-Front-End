import { Component } from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent{
    public identificado:boolean;
    constructor(){
        this.identificado = false;
        localStorage.setItem("milocal","asdasdas");
    }
}