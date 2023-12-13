import { Component,ElementRef,OnInit,ViewChild, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ServizioAutodidactaService } from '../../servizi/servizio-autodidacta.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputSaluti') inputSaluti!: ElementRef;

  title = 'corso-angular';
  isVisible = false;
  numero = 1;
  colore = '';
  oggi = Date.now();
  cuis = this.servizioAutodidacta.getCuis();
  sottoscrizione: any;
  homeform: FormGroup;
  persone: any;

  constructor(
    private servizioProva: ServizioProvaService,
    private servizioAutodidacta: ServizioAutodidactaService,
    private firebase: FirebaseService,
  ) {}

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick($event: Event) {
    this.title = 'I need to remember to play ultrakill';
  }

  getColor() {
    return 'purple';
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
    console.log(value);
  }

  ngOnInit(): any {
    /*     this.sottoscrizione = interval(1000).subscribe(numero => {
      console.log(numero);
    }) */

    this.homeform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      bird: new FormControl(),
    });
  }

  ngOnDestroy() {
    /* this.sottoscrizione.unsubscribe(); */
  }

  onClickTutorialVT() {
    console.log(this.inputSaluti.nativeElement.value);
  }

  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore;
  }

  onSubmit() {
    console.log(this.homeform);

    this.firebase.insertPersona(
      'https://corso-angular-29368-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 
      {name: this.homeform.value.name, email: this.homeform.value.email}  
    ).subscribe(data => {
      console.log(data)
    });
  }

  onDeletePersona() {
    this.firebase.deletePersona('https://corso-angular-29368-default-rtdb.europe-west1.firebasedatabase.app/persone', '-NlYpquP0-9-xz913hs8'
    ).subscribe(data => {
      console.log(data)
    })
  }

  onPatchPersona() {
    this.firebase.patchPersona('https://corso-angular-29368-default-rtdb.europe-west1.firebasedatabase.app/persone', 
    '-NlYpquP0-9-xz913hs8', 
    {email: 'perrotortuga@perdidolacabeza.com'}
    ).subscribe(data => {
      console.log(data)
    })
  }

  /* PRACTICE CODE */

  totalClasses = 40;

  lightButton = false;

  borderColor = 'aquamarine';

  classButton = true;

  inputText = '2 way binding: JS and user are connected';

  cuiImgs = [
    'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Cockatiel-2.jpg',
    'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/122709381/900',
    'https://petlandkennesaw.com/wp-content/uploads/2022/09/tiels.jpg',
  ];

  buttonChange() {
    if (this.lightButton == false) {
      this.lightButton = true;
    } else {
      this.lightButton = false;
    }
  }

  buttonNgstyle() {
    if (this.borderColor == 'royalblue') {
      this.borderColor = 'aqua';
    } else {
      this.borderColor = 'royalblue';
    }
  }

  buttonNgclass() {
    if (this.classButton == true) {
      this.classButton = false;
    } else {
      this.classButton = true;
    }
  }
}
