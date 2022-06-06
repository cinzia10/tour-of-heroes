import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  //// LE PROPRIETA' VANNO INIZIALIZZATE PRIMA DEL CONSTRUCTOR, INSERENDO DIRETTAMENTE IL VALORE, SENZA UTILIZZARE IL METHOD 'THIS.'
  // name:string = "paperino";
  // surname:string = "de papero";

  title:string = "Lista studenti";
  // students:string[] = ["paperino","pippo","topolino","minnie","pluto","paperina","gastone"]

  students2:any[] = [
    {
      name: 'pippo',
      grade: 7
    },
    {
      name: 'paperino',
      grade: 4
    },
    {
      name: 'topolino',
      grade: 10
    },
    {
      name: 'pluto',
      grade: 3
    },
    {
      name: 'paperone',
      grade: 8
    }
  ]

  constructor() {

  }

  ////
  ngOnInit(){
  //   const container = document.getElementById("app-container");

  //   const h1 = document.createElement('h1');
  //   const node = document.createTextNode(this.title);

  //   h1.appendChild(node);
  //   container?.appendChild(h1);

  //   const ul = document.createElement('ul');
  //   container?.appendChild(ul)
  //   for (const item of this.students) {
  //     const li = document.createElement('li');
  //     const node= document.createTextNode(item);
  //     li.appendChild(node);
  //     ul.appendChild(li);
  //   }
  // }

}

}
