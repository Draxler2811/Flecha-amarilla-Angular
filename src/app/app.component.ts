import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/app-header/header/header.component';
import { BannerRightComponent } from './components/app-banner-right/banner-right/banner-right.component';
import { BannerLeftComponent } from './components/app-banner-left/banner-left/banner-left.component';
import { BodyComponent } from './components/app-body/body/body.component';
import { FooterComponent } from './components/app-footer/footer/footer.component';
import { FirtsComponent } from './components/firts/firts/firts.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ObtenerDatosServiceService } from './services/obtener-datos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    BannerRightComponent,
    BannerLeftComponent,
    BodyComponent,
    FooterComponent,
    RouterLink,
    FirtsComponent,
    NotfoundComponent,
    MatButtonModule,
    MatGridListModule,
    CommonModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  valores:any;
constructor(private obtenerDatosService : ObtenerDatosServiceService){

}
ngOnInit(): void {
  this.getPokemon();
}

getPokemon() : void{
  this.obtenerDatosService.getPokemon('https://pokeapi.co/api/v2/pokemon').subscribe(
    (items :any) =>{
      console.log(items.results);
      this.valores=items.results;
    }
  )
}
  

  title = 'ejercicio1';
  alumnos : String = "omar"
  valorif=true;
  variables=[{nombre:"Omar"},{nombre:"Tec"},{nombre:"Fati"}];

  funcionEjemplo(){
    alert("hola") 
  }
}