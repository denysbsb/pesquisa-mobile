/**
 * Created by marioeugenio on 8/10/18.
 */

import { Injectable } from '@angular/core';
import { Http } from '@mbamobi/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PesquisadorService {

  constructor(public http: Http) {}

  verificarChave(key: string) {
    let params: any = {
      key: key
    };

    let observable = this.http.get('pesquisador-codigo', params);

    return new Promise((resolve, reject) => {
      observable.subscribe(res => {
        resolve(res.json());
      }, error => {
        reject(error);
      });
    });
  }
}
