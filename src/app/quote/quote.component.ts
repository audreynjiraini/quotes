import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Bow Down!', 'Beyonce', new Date(2019,7,16), 'Audrey',0,0),
    new Quote(2, 'Hey Mrs. Carter', 'Beyonce', new Date(2019,7,17), 'Audrey',0,0)
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.submitDate = new Date()
    quote.numberOfLikes = 0;
    quote.numberOfDislikes = 0;
    this.quotes.push(quote)
  }

  deleteNewQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}