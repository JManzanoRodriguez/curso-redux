import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  contador: number;

  constructor( private store: Store<AppState> ) {
    
  }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contador = state.contador;
    })
  }

  incrementar() {
    // this.contador++;
    const accion: Action = {
      type: 'INCREMENTAR'
    }

    this.store.dispatch(accion);
  }

  decrementar() {
    // this.contador--;
    const accion: Action = {
      type: 'DECREMENTAR'
    }

    this.store.dispatch(accion);
  }
}
