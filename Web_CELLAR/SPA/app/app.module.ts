import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MymaterialModule } from './/mymaterial.module';
import { MybootstrapModule } from './/mybootstrap.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { MyrouterModule } from './/myrouter.module';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { UnderconstructionComponent } from './views/underconstruction/underconstruction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CallbackComponent,
    UnderconstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialModule,
    MybootstrapModule,
    MyrouterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
