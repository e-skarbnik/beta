import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(public afAuith: AngularFireAuth, public router: Router) { }

  login(mail: string, password: string) {
    this.afAuith.auth.signInWithEmailAndPassword(mail, password)
      .then(user => { console.log(user); })
      .catch(err => { console.log(err); });
      this.router.navigateByUrl('/home');
  }
  signup(mail: string, password: string) {
    this.afAuith.auth.createUserWithEmailAndPassword(mail, password)
      .then(user => { console.log(user); })
      .catch(err => { console.log(err); });
      this.router.navigateByUrl('/home');
  }
  logout() {
    this.afAuith.auth.signOut();
    this.router.navigateByUrl('/home');
  }
}
