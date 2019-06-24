import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '@parameters/api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private apiRootUrl = apiUrl;

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(`${apiUrl}auth`, user);
  }

  // tslint:disable-next-line: max-line-length
  // méthode permettant de vérifier si il y a un token d'enregistrer au moment du login. les double !! permettent à la méthode de retourner soit true soit false

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
