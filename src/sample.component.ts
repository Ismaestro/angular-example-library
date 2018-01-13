import {Component, Input, OnInit} from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'sample-component',
  template: `<span>{{date}}</span>`
})
export class SampleComponent implements OnInit {
  @Input() locale: string;

  date: string;

  ngOnInit() {
    this.date = moment().locale(this.locale).format('MMM DD h:mm A');
  }
}
