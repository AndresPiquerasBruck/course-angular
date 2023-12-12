import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioAutodidactaService } from 'src/app/servizi/servizio-autodidacta.service';

@Component({
  selector: 'app-cuitatto',
  templateUrl: './cuitatto.component.html',
  styleUrls: ['./cuitatto.component.scss'],
})
export class CuitattoComponent {
  cui: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private servizioAutodidacta: ServizioAutodidactaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.cui = this.servizioAutodidacta.getCuitatto(this.id);
    });
  }

  /* Primer ngOnInit line:  el componente está utilizando el servicio ActivatedRoute 
  para suscribirse a los cambios 
  en los parámetros de la URL. Cuando hay cambios en los parámetros de la URL, 
  la función de devolución de llamada dentro de subscribe se ejecutará. */
}
