import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party modules
import { AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';

// shared module
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCkGZyl6A6kx7VASNn3RdhMHbC3vLObq8c",
  authDomain: "fitness-app-a9185.firebaseapp.com",
  databaseURL: "https://fitness-app-a9185.firebaseio.com",
  projectId: "fitness-app-a9185",
  storageBucket: "fitness-app-a9185.appspot.com",
  messagingSenderId: "129417252733"
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}