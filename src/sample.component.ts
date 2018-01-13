import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'sample-component',
  template: `<span>{{date}}</span>`
})
export class SampleComponent implements OnInit, OnChanges {
  @Input() locale: string;

  date: string;

  ngOnInit() {
    this.date = moment().locale(this.locale).format('dddd, D MMMM, YYYY LT');
  }

  ngOnChanges(changes: SimpleChanges) {
    const locale: SimpleChange = changes.locale;
    this.date = moment().locale(locale.currentValue).format('dddd, D MMMM, YYYY LT');
  }
}
