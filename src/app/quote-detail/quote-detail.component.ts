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

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {
    this.numberOfLikes = 0;
    this.numberOfDislikes = 0;
   }

   likeVote () {
     this.numberOfLikes++;
   }
   dislikeVote() {
     this.numberOfDislikes++;
   }

   quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  ngOnInit() {
  }

}
