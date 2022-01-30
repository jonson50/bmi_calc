import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'M';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  operacionPeso(numero:number) {
    this.peso += numero;
    if(this.peso < 1) this.peso = 1;
  }

  operacionEdad(numero:number) {
    this.edad += numero;
    if(this.edad < 1) this.edad = 1;
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  cambiarSexo(genero:any) {
    this.sexo = genero;
    console.log(this.sexo);
  }

  calcularBMI() {
    // calculate BMI
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    //redirecting
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
