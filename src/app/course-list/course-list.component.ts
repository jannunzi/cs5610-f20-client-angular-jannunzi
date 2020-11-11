import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = []
  courseId = ''

  constructor(private activedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {

    this.activedRoute.params.subscribe(params => {
      this.courseId = params.cid;
    })

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
