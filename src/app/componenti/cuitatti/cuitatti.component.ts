import { Component } from '@angular/core';
import { ServizioAutodidactaService } from 'src/app/servizi/servizio-autodidacta.service';

@Component({
  selector: 'app-cuitatti',
  templateUrl: './cuitatti.component.html',
  styleUrls: ['./cuitatti.component.scss']
})
export class CuitattiComponent {
  cuitatti: any;

  constructor ( private servicioAutodidacta: ServizioAutodidactaService ) {

  }

  ngOnInit() {
    this.cuitatti = this.servicioAutodidacta.getCuitatti();
  }

}
