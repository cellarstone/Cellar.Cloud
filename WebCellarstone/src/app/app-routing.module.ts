import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashComponent } from 'src/app/main-dash/main-dash.component';
import { MainEmptyComponent } from 'src/app/main-empty/main-empty.component';
import { MainTableComponent } from 'src/app/main-table/main-table.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';

const routes: Routes = [
  { path: '', redirectTo: '/underconstruction', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderconstructionComponent },
  { path: 'dashboard', component: MainDashComponent },
  { path: 'table', component: MainTableComponent },
  { path: 'empty', component: MainEmptyComponent }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
