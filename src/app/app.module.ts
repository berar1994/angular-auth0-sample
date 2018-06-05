import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** COMPONENTS **/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CallbackComponent } from './callback/callback.component';

/** SERVICES **/
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'welcome', component: WelcomeComponent},
        {path: 'secured/home', component: HomeComponent},
        {path: 'callback', component: CallbackComponent},
        {path: '**', redirectTo: '/welcome'}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
