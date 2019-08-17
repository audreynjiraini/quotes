import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:'Watch finding Nemo', author:'Beyonce'},
    {name:'Watch finding Nemo',author:'Beyonce'},
    {name:'Watch finding Nemo',author:'Beyonce'},
    {name:'Watch finding Nemo',author:'Beyonce'},
    {name:'Watch finding Nemo',author:'Beyonce'},
    {name:'Watch finding Nemo',author:'Beyonce'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
