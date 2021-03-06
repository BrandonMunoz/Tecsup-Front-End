import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from '../c_home/home.component';
import { NotFoundComponent } from '../c_notfound/notfound.component';
import { CrearComponent } from '../c_crear/crear.component';
import { MostrarComponent } from '../c_mostrar/mostrar.component';
import { DetalleComponent } from '../c_detalle/detalle.component';
import { EditarComponent } from '../c_editar/editar.component';
import { LoginComponent } from '../c_login/login.component';
import { RegisterComponent } from '../c_register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CrearComponent,
    MostrarComponent,
    DetalleComponent,
    EditarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
