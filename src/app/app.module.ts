import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { FormsModule } from "@angular/forms";
>>>>>>> remotes/origin/master
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
<<<<<<< HEAD

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
=======
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserService } from "../providers/user.service";
>>>>>>> remotes/origin/master

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    FormsModule,
    HttpModule,
>>>>>>> remotes/origin/master
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
=======
    UserService,
>>>>>>> remotes/origin/master
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
