import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';


const routes: Routes = [
  {path: '', component: CourseNavigatorComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseNavigatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
