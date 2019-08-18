import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  numberOfLikes: number;
  numberOfDislikes: number;

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  likeVote(): boolean{
    this.numberOfLikes++;
    return false;
  }
  dislikeVote(): boolean{
    this.numberOfDislikes++;
    return false;
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {
    this.numberOfLikes = 0;
    this.numberOfDislikes = 0;
  }

  ngOnInit() {
  }

}
