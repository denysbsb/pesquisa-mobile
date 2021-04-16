/**
 * Created by marioeugenio on 8/10/18.
 */

import { Injectable } from '@angular/core';
import { Http } from '@mbamobi/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(public http: Http) {}

  loadQuiz() {
    let observable = this.http.get('quiz');

    return new Promise((resolve, reject) => {
      observable.subscribe(res => {
        resolve(res.json());
      }, error => {
        reject(error);
      });
    });
  }

  save(params: any) {
    let observable = this.http.post('quiz', params);

    return new Promise((resolve, reject) => {
      observable.subscribe(res => {
        resolve(res.json());
      }, error => {
        reject(error);
      });
    });
  }
}
