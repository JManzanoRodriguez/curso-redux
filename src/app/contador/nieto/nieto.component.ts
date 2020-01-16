import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  public contador: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe( contador => this.contador = contador)
  }

  reset() {
    const reset = new ResetAction();
    this.store.dispatch(reset);
  }

}
