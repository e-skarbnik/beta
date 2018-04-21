import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';




@Injectable()
export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: User;
  constructor(private firestore: AngularFirestore) {

  }

  getUsers() {
    this.usersCollection = this.firestore.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }

  addUser(user: User) {


    user.$key = this.firestore.createId();
    user.paymaster = false;

    this.usersCollection.add(user);
  }

}
