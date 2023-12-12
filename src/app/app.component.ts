import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServizioProvaService } from "./servizi/servizio-prova.service"
import { ServizioAutodidactaService } from "./servizi/servizio-autodidacta.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('inputSaluti') inputSaluti!: ElementRef

  title = 'corso-angular';
  isVisible = false;
  numero = 1;
  color= 'green';
  colore= '';
  oggi = Date.now();
  cuis = this.servizioAutodidacta.getCuis();
 
  constructor(private servizioProva: ServizioProvaService, private servizioAutodidacta: ServizioAutodidactaService) {

  }
  

  onInput(event: Event){
    this.title = (<HTMLInputElement>event.target).value
  }

  onClick($event: Event) {
    this.title = 'I need to remember to play ultrakill'
  }

  getColor(){
    return 'purple'
  }

  onClickTutorial() {
/*     this.persone = [
      {nome: "pollito1", cognome: "Cuackario", isOnline: true},
      {nome: "pollito2", cognome: "Peppe", isOnline: false},
      {nome: "pollito3", cognome: "e-boy", isOnline: true},
      {nome: "pollito4", cognome: "SC", isOnline: true},
      {nome: "pollito5", cognome: "Funny entra guy", isOnline: false},
      {nome: "pollito6", cognome: "mph", isOnline: true},
    ] */
  }

  riceviDati(value: string) {
    console.log(value)
  }

  ngOnInit(): void {
    console.log('ngOnInit Appcomponent', this.servizioProva.getPersone())
    console.log('ngOnInit Appcomponent', this.servizioAutodidacta.getCuis())
    console.log(this.inputSaluti)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.inputSaluti)
  }

  onClickTutorialVT() {
    console.log(this.inputSaluti.nativeElement.value)
  }

  cambiaColoreEvidenziatore(colore:string) {
    this.colore= colore
  }

  /* PRACTICE CODE */

  totalClasses = 40;

  lightButton = false;

  borderColor = 'aquamarine';

  classButton = true;

  inputText= "2 way binding: JS and user are connected";

  cuiImgs = [
    "https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Cockatiel-2.jpg",
    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/122709381/900",
    "https://petlandkennesaw.com/wp-content/uploads/2022/09/tiels.jpg"
  ]

  buttonChange() {
    if (this.lightButton == false) {
      this.lightButton = true;
    }else{
      this.lightButton = false;
    }
  }

  buttonNgstyle() {
    if (this.borderColor == 'royalblue') {
      this.borderColor = 'aqua';
    }else{
      this.borderColor = 'royalblue';
    }
  }

  buttonNgclass() {
    if (this.classButton == true) {
      this.classButton = false;
    }else{
      this.classButton = true;
    }
  }
}
