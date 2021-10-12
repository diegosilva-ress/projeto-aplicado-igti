import { Component, OnInit } from '@angular/core';
import {GlobalComponent} from '../global-component';

@Component({
  selector: 'app-entre-contato',
  templateUrl: './entre-contato.component.html',
  styleUrls: ['./entre-contato.component.css']
})
export class EntreContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getHome() {
    return GlobalComponent.urlPerfilLogado;
  }
}
