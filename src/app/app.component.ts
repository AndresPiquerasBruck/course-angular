import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServizioProvaService } from "./servizi/servizio-prova.service"
import { ServizioAutodidactaService } from "./servizi/servizio-autodidacta.service"
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  ngOnInit(): void {
/*     interval(1000).subscribe(numero => {
      console.log(numero);
    }) */

/*     new Observable(observer => {
      let count = 0
      setInterval(()=>{
        observer.next(count);
        count++
      }, 1000);
    }).subscribe((numero) => {
      console.log(numero);
    }); */
  }
}
