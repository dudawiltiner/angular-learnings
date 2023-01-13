import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['ângular 2']

  mostrarCursos = false

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }

  constructor() { }

  ngOnInit(): void {
  }

}
