import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = "Uma URL comum"

  cursoAngular = true

  valorAtual = ''

  valorSalvo = ''

  isMouseOver = false

  urlImage = 'https://t4.ftcdn.net/jpg/04/34/08/53/360_F_434085394_Z8iB9TJiNwhCWBekHi1BTBURGYfPveeL.jpg'

  nome= 'abc'

  pessoa: any = {
    nome: 'def',
    idade: 20,
  }

  nomeDoCurso = 'Angular'

  valorInicial=6

  getValue() { // método
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert("Botao Clicado!")
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value)
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event: any) {
    console.log(event.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
