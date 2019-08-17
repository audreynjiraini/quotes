import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() next = new EventEmitter<boolean>();

  quoteNext(complete:boolean) {
    this.next.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
