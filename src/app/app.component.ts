import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

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
    this.store.select('contador').subscribe( state => {
      this.contador = state;
      console.log(state);
    })
  }

  incrementar() {
    const action = new IncrementarAction();    

    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();

    this.store.dispatch(action);
  }
}
