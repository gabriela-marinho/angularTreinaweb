import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BloqueadorGuard} from "./guards/bloqueador.guard";


const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('src/app/courses/courses.module').then(m => m.CoursesModule),
    canActivate: [ BloqueadorGuard],
    canLoad: [BloqueadorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
