import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesListComponent} from "../courses-list/courses-list.component";
import {BloqueadorGuard} from "../guards/bloqueador.guard";

const routes: Routes = [
  {

        path: ':nome',
        component: CoursesListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
