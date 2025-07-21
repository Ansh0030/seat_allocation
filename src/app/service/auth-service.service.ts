import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loggedInSubject = new BehaviorSubject<boolean>(this.getInitialStatus());
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() { }

  private getInitialStatus(): boolean {
    const raw = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn in localStorage:', raw);

    return raw === 'true';
  }

  setLoggedIn(status: boolean): void {
    localStorage.setItem('isLoggedIn', JSON.stringify(status));
    this.loggedInSubject.next(status);
  }

  getLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.loggedInSubject.next(false);
  }
}
