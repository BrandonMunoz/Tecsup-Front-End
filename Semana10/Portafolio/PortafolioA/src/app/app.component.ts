import { Component, DoCheck} from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[AuthenticationService]
})
export class AppComponent implements DoCheck{
  constructor(private _auth:AuthenticationService){

  }

  ngDoCheck(){
    
  }
}
