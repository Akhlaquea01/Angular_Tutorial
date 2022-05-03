import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    AboutUsComponent,
    AboutAngularComponent,
    ContactComponent,
    TableComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
