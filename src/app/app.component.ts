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
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObservablesService } from './services/observables.service';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { Pokemon } from './entities/pokemon';

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
    CommonModule,
    ReactiveFormsModule,
    AppLoaderComponent,
    FormsModule


    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  valores:any[]=[];
  checkoutForm : any;
  loader:boolean=false;
  pokemon:Pokemon = new Pokemon();

constructor(private obtenerDatosService : ObtenerDatosServiceService,
  private formBuilder: FormBuilder,
  private ObservableService:ObservablesService){

  this.checkoutForm = this.formBuilder.group({
    name:new FormControl(null,[Validators.minLength(1)]),
    url: new FormControl(null,[Validators.maxLength(2)]),
    email: new FormControl(null,[Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')])

  });

}
ngOnInit(): void {
  this.getPokemon();
  this.ObservableService.loaderObs.subscribe((valor:boolean)=>{
    this.loader=valor;
    console.log(valor);
  });
}

onSubmit(valorFormulario:any){
  if((this.checkoutForm.invalid) || (this.checkoutForm.get('name').value == 'angular')){
    alert('Formulario incorrecto')
  }else {
this.valores.push(valorFormulario);
this.checkoutForm.reset();
  }
}

getPokemon() : void{
  this.obtenerDatosService.getPokemon('https://pokeapi.co/api/v2/pokemon').subscribe(
    (items :any) =>{
      console.log(items.results);
      this.valores=items.results;
      setTimeout(() => this.ObservableService.actualizarValorLoader(false),5000);  
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