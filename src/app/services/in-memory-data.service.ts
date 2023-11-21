import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Izuku Midoriya', individualidade: "One for All", img: "1.png" },
      { id: 2, name: 'Katsuki Bakugo' , individualidade: "Explosão" , img: "2.png" },
      { id: 3, name: 'Shoto Todoroki' , individualidade: "Meio-frio Meio-quente", img: "3.png" },
      { id: 4, name: 'Eijiro Kirishima', individualidade: "Endurecimento", img: "4.png" },
      { id: 5, name: 'Tenya Lida' , individualidade: "Motor", img: "5.png" },
      { id: 6, name: 'Momo Yaoyorozu' , individualidade: "Criação" , img: "6.png" },
      { id: 7, name: 'Ochaco Uraraka', individualidade: "Gravidade zero", img: "7.png"  },
      { id: 8, name: 'Toru Hagakure', individualidade: "Transparência", img: "8.png"  },
      { id: 9, name: 'Mina Ashido', individualidade:  "Ácido", img: "9.png" },
      { id: 10, name: 'Denki Kaminari', individualidade: "Eletrificação", img: "10.png"  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}