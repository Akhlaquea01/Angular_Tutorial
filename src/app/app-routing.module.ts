import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-angular', component: AboutAngularComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
