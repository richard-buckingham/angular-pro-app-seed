import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


/* <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkGZyl6A6kx7VASNn3RdhMHbC3vLObq8c",
    authDomain: "fitness-app-a9185.firebaseapp.com",
    databaseURL: "https://fitness-app-a9185.firebaseio.com",
    projectId: "fitness-app-a9185",
    storageBucket: "fitness-app-a9185.appspot.com",
    messagingSenderId: "129417252733"
  };
  firebase.initializeApp(config);
</script> */
