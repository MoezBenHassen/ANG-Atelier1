import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  idFournisseur: number = 105;
  code: string = 'A104B89';
  libelle: string = 'MyTeck';
  hide: boolean = false;
  
  isHidden(){
    this.hide=true;
    console.log(this.hide + " is hidden");
  }
}
