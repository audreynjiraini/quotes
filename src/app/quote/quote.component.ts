import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Bow Down!", "Beyonce Giselle Knowles-Carter", new Date(2018,7,16), 'Audrey'),
    new Quote(2, "Do what you were born to do. You just have to trust yourself.", "Beyonce Giselle Knowles-Carter", new Date(2018,7,17), 'Audrey'),
    new Quote(3, "I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.", "Beyonce Giselle Knowles-Carter", new Date(2019,1,1), 'Audrey'),
    new Quote(4, "Don't try to lessen yourself for the world; let the world catch up to you.", "Beyonce Giselle Knowles-Carter", new Date(2019,2,22), 'Audrey'),
    new Quote(5, "Power is not given to you. You have to take it.", "Beyonce Giselle Knowles-Carter", new Date(2019,4,13), 'Audrey'),
    new Quote(6, "Never let success go to your head, never let failure get to your heart.", "Beyonce Giselle Knowles-Carter", new Date(2019,7,17), 'Audrey'),
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

  deleteQuote(isComplete, index){
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