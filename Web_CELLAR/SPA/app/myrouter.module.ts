import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { CallbackComponent } from './callback/callback.component';
import { UnderconstructionComponent } from './views/underconstruction/underconstruction.component';



const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: ContactComponent },
 { path: 'contact', component: AboutComponent },
 { path: 'callback', component: CallbackComponent },
];

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class MyrouterModule { }