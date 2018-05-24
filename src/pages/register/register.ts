import { Component } from '@angular/core';
import { NavController,  IonicPage } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User
  constructor(private nav: NavController, private AFauth: AngularFireAuth) { }

  async createAccount(user: User) {
    try {
      const result = await this.AFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.nav.setRoot('MainPage');
      }
    } catch (e) {
      console.error(e);
    }
  }
  
}