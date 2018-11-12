// Para que lo sepa EM6
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
/* import { HomeModule } from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutModule } from './about/about.module'; */
// Para que lo sepa angular
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    /*HomeModule,
     TasksModule,
    AboutModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
