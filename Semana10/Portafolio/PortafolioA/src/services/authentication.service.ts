export interface UserDetails {
    _id: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
  }
  
interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    
    private token: string;
    
    constructor(private _router:Router,
    private _httpClient:HttpClient){}
    
    public saveToken(token:string):void{
        localStorage.setItem("mean-token",token);
        this.token = token;
    }

    private getToken():string{
        if(!this.token){
            this.token = localStorage.getItem("mean-token");
        }
        return this.token;
    }

    public logout():void{
        this.token = "";
        localStorage.removeItem("mean-token");
        this._router.navigate(['/']);
        // this._router.navigateByUrl('/');
    }
    /**
     * Obtener la información del usuario a través de JWT
     */
    public getUserDetails():any{
        const token = this.getToken();
        let payload;
        if(token){
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }else{
            return null;
        }
    }
    /**
     * Verificar que un usuario este loggeado
     * validando su fecha de expiración
     */
    public isLoggedIn():boolean{
        const user = this.getUserDetails();
        if(user){
            if(user.exp > Date.now()/1000){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    /**
     * Función genérica de request's
     */
    private request(method: 'post'|'get',
                    type: 'login'|'register'|'profile',
                    user?):Observable<any>{
        let base;
        
        if(method === 'post'){
            base =  this._httpClient.post('http://localhost:3700/api/'+type,user);
        }else{
            base = this._httpClient.get('http://localhost:3700/api/'+type,{headers:{Authorization:`Bearer ${this.getToken()}`}});
        }            
        const request = base.pipe(
            map((data:TokenResponse)=>{
                if(data.token){
                    this.saveToken(data.token);
                }
                return data;
            })
        );

        return request;
    }

    public register(user):Observable<any>{
        return this._httpClient.post("http://localhost:3700/api/register",user,{headers:{Authorization:`Bearer ${this.getToken()}`}});
        
    }

    public login(user):Observable<any>{
        return this.request('post','login',user);
    }

    public profile():Observable<any>{
        return this.request('get','profile');
    }
    
}