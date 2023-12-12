import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioAutodidactaService {
  cuis = [
    'https://problemparrots.co.uk/wp-content/uploads/Cockatiel.jpg',
    'https://piscespets.com/cdn/shop/articles/267766ab0972edcd5dbd82045a4e5ff2.jpg?v=1623956721',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDPvzmFc8po0WuacR2dOleMTO1_QcOuIPLw&usqp=CAU',
  ]

  cuitatti = [
    {src: 'https://problemparrots.co.uk/wp-content/uploads/Cockatiel.jpg',
    nome: "Cui posing"},
    {src: 'https://piscespets.com/cdn/shop/articles/267766ab0972edcd5dbd82045a4e5ff2.jpg?v=1623956721',
    nome: "Cui tilted to the left"},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDPvzmFc8po0WuacR2dOleMTO1_QcOuIPLw&usqp=CAU',
    nome: "Cui with hat"},
    {src: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/122709381/900',
    nome: "Cui alone against the danger"},
    {src: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Cockatiel-2.jpg',
    nome: "Cui nice crest"},
    {src: "https://petlandkennesaw.com/wp-content/uploads/2022/09/tiels.jpg",
    nome: "Cui couple"},
  ]

  constructor() { }

  getCuis(){
    return this.cuis;
  }

  getCui(index: number) {
    return this.cuis[index];
  }

  getCuitatti(){
    return this.cuitatti;
  }

  getCuitatto(index: number) {
    return this.cuitatti[index];
  }
}
