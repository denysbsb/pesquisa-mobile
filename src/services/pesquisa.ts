/**
 * Created by marioeugenio on 8/10/18.
 */

import { Injectable } from '@angular/core';
import { Http } from '@mbamobi/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PesquisaService {

  constructor(public http: Http) {}

  getAddress(lat: string, lng: string) {
    let observable = this.http.get('google', { latlng: lat + '+' + lng });

    return new Promise((resolve, reject) => {
      observable.subscribe(res => {
        resolve(res.json());
      }, error => {
        reject(error);
      });
    });
  }
}
