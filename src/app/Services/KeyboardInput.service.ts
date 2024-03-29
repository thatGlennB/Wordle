import { Injectable } from '@angular/core';
import { GuessService } from './Guess.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardInputService {

  // NOTE: I should merge the "guessed lettes" observable into the "guesses" service
  onKeyUp(input:string):void
  {
    if(RegExp(/[a-zA-Z]/).test(input) && input.length == 1)
    {
      input = input.substring(0,1).toUpperCase();
      this._data.add(input);
    }
  }
  onBackspace = () => this._data.delete();
   
  onEnter = () => this._data.check();
  
  
  constructor(private _data:GuessService){
  }
}
