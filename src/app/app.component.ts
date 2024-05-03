import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'ejercicio1';
  alumnos : String = "omar"
  valorif=true;
  variables=[{nombre:"Omar"},{nombre:"Tec"},{nombre:"Fati"}];

  funcionEjemplo(){
    alert("hola") 
  }
}
