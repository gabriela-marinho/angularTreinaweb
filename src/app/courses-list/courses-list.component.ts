import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  name = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    //this.name = this.activateRoute.snapshot.params['nome']
    this.activateRoute.params.subscribe(
      params => {
        this.name = params['nome'];
      }
    )
  }

  ngOnInit(): void {
    //this.router.navigate(['/cursos/jquery'])
  }
}
