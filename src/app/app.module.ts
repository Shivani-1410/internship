import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques1Component } from './ques1/ques1.component';
import { Ques2Component } from './ques2/ques2.component';
import { Ques3Component } from './ques3/ques3.component';
import { Ques4Component } from './ques4/ques4.component';


var routes : Routes = [
  {
    path: 'ques1',
    component : Ques1Component
  },
  {
    path : 'ques2',
    component : Ques2Component
  },
  {
    path : 'ques3',
    component : Ques3Component
  },
  {
    path : 'ques4',
    component : Ques4Component
  },
  {
    path:'',
    redirectTo:'/ques1',
    pathMatch:'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    Ques1Component,
    Ques2Component,
    Ques3Component,
    Ques4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
