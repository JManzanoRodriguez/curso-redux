import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe( contador => this.contador = contador)
  }

  dividir() {
    const action = new DividirAction(2);
    this.store.dispatch(action);
  }

  multiplicar() {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
  }

}
