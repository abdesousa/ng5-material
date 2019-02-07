import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer: string = '';
  answerDisplay: string ='';
  showSpinner: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  showAnswer() {
    this.showSpinner=true;
    setTimeout(() => {
      this.answerDisplay=this.answer;
      this.showSpinner=false;
    }, 2000);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
