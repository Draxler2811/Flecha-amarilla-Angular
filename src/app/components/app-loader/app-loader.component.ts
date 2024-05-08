import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ObservablesService } from '../../services/observables.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './app-loader.component.html',
  styleUrl: './app-loader.component.css'
})
export class AppLoaderComponent implements OnInit{
  loader:boolean=false;

constructor(private observableService: ObservablesService){

}
  ngOnInit(): void {
    this.observableService.loaderObs.subscribe((valor:boolean)=>{
      this.loader=valor;
      console.log(valor);
    });
  }
}
