import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegserviceProvider {
  url="http://localhost:3000/api";

  constructor(public http: HttpClient) {
    console.log('Hello RegserviceProvider Provider');
  }
  login(authCredentials) {
    //console.log(authCredentials);
    
    return this.http.post(this.url + '/authenticate', authCredentials);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
