import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  persone = [
    {nome: "Ilario", cognome: "Cuackario", isOnline: true, color: 'lightblue'},
    {nome: "Giuseppe", cognome: "Peppe", isOnline: false, color: 'lightgray'},
    {nome: "Mattia", cognome: "e-boy", isOnline: true, color: 'lightred'},
    {nome: "Andrea", cognome: "Luis Vuiton", isOnline: true, color: 'lightgreen'},
    {nome: "Marco", cognome: "Funny entra guy", isOnline: false, color: 'lightyellow'},
    {nome: "Hermal", cognome: "mph", isOnline: true, color: 'lightpink'},
  ]

  constructor() { }

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }
}
