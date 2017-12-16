import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

<<<<<<< HEAD
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

=======
import { UserService } from "../../providers/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService]
})
export class HomePage {
  username: string;
  password: string;
  newPassword: string;

  constructor(
    public navCtrl: NavController,
    public us: UserService
  ) {

  }

  registerUser(){
    const subscription = this.us.registerUser(this.username, this.password).subscribe((res) => {
      console.log(res);
    });
>>>>>>> remotes/origin/master
  }

}
