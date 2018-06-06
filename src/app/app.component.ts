import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public answer: string = '';
  public answerDisplay: string = '';
  public showSpinner: boolean = false;

  showAnswer(){
    this.showSpinner = true;
    this.answerDisplay = '';

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000)
  }

  myData: Array<any>;
  constructor(private http: Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    // Call map on the response observable to get the parsed people object
    .pipe(map(res => res.json()))
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
    .subscribe(res2 => this.myData = res2);
  }

}
