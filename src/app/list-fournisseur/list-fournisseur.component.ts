import { Component } from '@angular/core';
import { FournisseurTs } from '../models/fournisseur.ts';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent {
  listFournisseur: FournisseurTs[] = [
    { idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
    { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
    { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
    { idFournisseur: 400, code: "40ABC452", libelle: "asus" }
  ];

  isValidID(idFournisseur:number):boolean{
    return idFournisseur >=100;
  }
  getColor(code:string):boolean{
    return code.includes("2A");
  }  
}
