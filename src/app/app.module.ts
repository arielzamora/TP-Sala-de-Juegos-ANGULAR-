import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 
import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { MemoriaComponent } from './componentes/memoria-numerica/memoria-numerica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';

import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule} from '@angular/fire/firestore'; 
import { AngularFireStorageModule} from '@angular/fire/storage'; 
import { firebaseConfig } from '../environments/environment';

import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabaseService} from './servicios/database.service';



@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    MemoriaComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ JuegoServiceService,
     MiHttpService,
     PaisesService,
     ArchivosJugadoresService,
     JugadoresService,
     DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
