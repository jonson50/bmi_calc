import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!; // el + es para volver el string a number
    // el ! es para evitar el valor null por si llega a venir nulo
    console.log(this.bmi);
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if(this.bmi >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer mas ejercicio, flojo';
    } else if(this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. Buen trabajo, sigue así!!';
    } else {
      this.resultado = 'Bajo de peso';
      this.interpretacion = 'Tienes un peso corporal por debajo de lo normal. Puedes comer un poco mas';
    }
  }

}
