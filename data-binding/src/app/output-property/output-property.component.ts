import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs:['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor= 0; // DECORATOR

  
  @Output() mudouValor = new EventEmitter(); // classe para emitir algo, criar um evento emissor

  @ViewChild('campoInput') campoValorInput: ElementRef; // VIEWCHILD é um DECORATOR que faz ligação entre a variável do template com a do compoenente 

  incrementa() {
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
