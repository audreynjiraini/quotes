import { Component } from '@angular/core';
import { Quote } from './quote';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
}
