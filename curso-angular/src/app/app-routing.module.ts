import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
/* import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component'; */

const routes: Routes = [ 
  /* { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'about', component: AboutComponent }, */
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
