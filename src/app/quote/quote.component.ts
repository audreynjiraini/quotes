import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Bow Down!', 'Beyonce', new Date(2019,7,16), 'Audrey'),
    new Quote('Hey Mrs. Carter', 'Beyonce', new Date(2019,7,17), 'Audrey')
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.submitDate = new Date()
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}