import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { CursosComponent } from './cursos/cursos.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { TutoriasComponent } from './tutorias/tutorias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlatprincipalComponent } from './platprincipal/platprincipal.component';
import { VideoconferenciaComponent } from './videoconferencia/videoconferencia.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { WebsocketService } from './videoconferencia/websocket.service';
import { HttpClientModule } from '@angular/common/http';
import { DetallepagoComponent } from './detallepago/detallepago.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltertPipe } from './pipes/filtert.pipe';
import { PlattutoriaComponent } from './plattutoria/plattutoria.component';
import { PlatcursosComponent } from './platcursos/platcursos.component';
import { StorageHandlerService } from './servicios/storage-handler.service';
import { LoginService } from './servicios/login.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AlertsService } from 'angular-alert-module';
import { RegistroService } from './servicios/registro.service';
import { PerfilService } from './servicios/perfil.service';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { LogoutComponent } from './logout/logout.component';
import { TutoriasidiomasComponent } from './tutoriasidiomas/tutoriasidiomas.component';
import { TutoriasmatematicasComponent } from './tutoriasmatematicas/tutoriasmatematicas.component';
import { TutoriascienciasComponent } from './tutoriasciencias/tutoriasciencias.component';
import { CursoscienciasComponent } from './cursosciencias/cursosciencias.component';
import { CursosidiomasComponent } from './cursosidiomas/cursosidiomas.component';
import { CursosmatematicasComponent } from './cursosmatematicas/cursosmatematicas.component';
import { PlattutoriascienciasComponent } from './plattutoriasciencias/plattutoriasciencias.component';
import { PlattutoriasidiomasComponent } from './plattutoriasidiomas/plattutoriasidiomas.component';
import { PlattutoriasmatematicasComponent } from './plattutoriasmatematicas/plattutoriasmatematicas.component';


const config = {
  apiKey: 'AIzaSyCpqI773ach6MxOcIqRvgDFBVVTvLJW-Ew',
  authDomain: 'sample6-d38d3.firebaseapp.com',
  databaseURL: 'https://sample6-d38d3.firebaseio.com',
  projectId: 'sample6-d38d3',
  storageBucket: 'gs://sample6-d38d3.appspot.com',
  messagingSenderId: '358754973898'
};

const appRoutes: Routes = [

  { path: 'principal', component: PrincipalComponent },
  { path: 'cursos' , component : CursosComponent},
  { path: 'login' , component : LoginComponent},
  { path: 'tutorias' , component : TutoriasComponent},
  { path: 'registro' , component : RegistroComponent},
  { path: 'conocenos' , component : ConocenosComponent},
  { path: 'politicas' , component : PoliticasComponent},
  {path: 'platperfil' , component : PerfilComponent},
  {path: 'dashboard' , component : PlatprincipalComponent},
  {path: 'plattutorias' , component : PlattutoriaComponent},
  {path: 'platcursos' , component : PlatcursosComponent},
  {path: 'conferencia' , component: VideoconferenciaComponent},
  {path: 'detallepago' , component: DetallepagoComponent},
  {path: 'privacidad' , component: PrivacidadComponent},
  {path: 'logout' , component: LogoutComponent},
  { path: 'tutorias_idiomas' , component : TutoriasidiomasComponent},
  { path: 'tutorias_matematicas' , component : TutoriasmatematicasComponent},
  { path: 'tutorias_ciencias' , component : TutoriascienciasComponent},
  { path: 'cursos_ciencias' , component : CursoscienciasComponent},
  { path: 'cursos_idiomas' , component : CursosidiomasComponent},
  { path: 'cursos_matematicas' , component : CursosmatematicasComponent},
  { path: 'plattutorias_ciencias' , component : PlattutoriascienciasComponent},
  { path: 'plattutorias_idiomas' , component : PlattutoriasidiomasComponent},
  { path: 'plattutorias_matematicas' , component : PlattutoriasmatematicasComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConocenosComponent,
    CursosComponent,
    RegistroComponent,
    PrincipalComponent,
    TutoriasComponent,
    PerfilComponent,
    PlatprincipalComponent,
    VideoconferenciaComponent,
    PlatcursosComponent,
    PoliticasComponent,
    DetallepagoComponent,
    FilterPipe,
    FiltertPipe,
    PlattutoriaComponent,
    PrivacidadComponent,
    LogoutComponent,
    TutoriasidiomasComponent,
    TutoriasmatematicasComponent,
    TutoriascienciasComponent,
    CursoscienciasComponent,
    CursosidiomasComponent,
    CursosmatematicasComponent,
    PlattutoriascienciasComponent,
    PlattutoriasidiomasComponent,
    PlattutoriasmatematicasComponent,
   
    


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
     BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    StorageServiceModule,


  ],
  exports: [
    RouterModule
  ],
  providers: [WebsocketService, LoginService, PerfilService, AlertsService, StorageHandlerService, RegistroService],
  bootstrap: [AppComponent],


})
export class AppModule { }
