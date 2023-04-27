import {Component, OnInit} from '@angular/core';
import{ ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  name = '';
  constructor(
    private activateRoute: ActivatedRoute
  ) {
    this.name = this.activateRoute.snapshot.params['nome']
  }

  ngOnInit(): void {
  }
}
