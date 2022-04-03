import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: 'Link1', component:HomeComponent},
  {path: 'Link2', component:HomeComponent},
  {path: 'Link3', component:HomeComponent},
  {path: 'Link4', component:HomeComponent},
  {path: 'Link5', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
