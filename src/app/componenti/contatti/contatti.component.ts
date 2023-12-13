import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  persone: any
  
  constructor(private firebase: FirebaseService) {

  }

  ngOnInit(): void {
    this.persone = this.firebase.getPersone('https://corso-angular-29368-default-rtdb.europe-west1.firebasedatabase.app/persone.json'
    ).subscribe((data: any) =>{
      this.persone = Object.keys(data).map((key)=> {
        data[key]['id'] = key
        return data[key]})
    })
  }
}
