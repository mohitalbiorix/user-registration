import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user : any){
    let users: any =[];
    if(localStorage.getItem('user')){
      users= JSON.parse(localStorage.getItem('user') || '{}')
      users = [user , ...users]
    }
    else{
      users = [user]
    }
    localStorage.setItem("user", JSON.stringify(users));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user')|| '{}')
  }


}
