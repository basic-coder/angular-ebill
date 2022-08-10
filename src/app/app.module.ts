import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillModule } from './bill/bill.module';
import { HomeComponent } from './Bill/home/home.component';
import { CreateComponent } from './Bill/create/create.component';
import { EditComponent } from './Bill/edit/edit.component';
import { AboutComponent } from './Bill/about/about.component';
import { ContactComponent } from './Bill/contact/contact.component';
import { ResumeComponent } from './Bill/resume/resume.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BillModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
