import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  persone: any
  
  constructor(private servizioProva: ServizioProvaService) {

  }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()
  }
}
