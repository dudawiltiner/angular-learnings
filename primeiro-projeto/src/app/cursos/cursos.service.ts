import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) // Decorator que permite injetar a a classe em outra

export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular']
  }
}
