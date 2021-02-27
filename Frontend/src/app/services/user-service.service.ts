import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user:User) {
  let users = [];
  if(localStorage.getItem('Users')){
    users = [user, ...users];
  } else{
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(user))
}
}
