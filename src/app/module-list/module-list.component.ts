import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/ModuleService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = []

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.cid;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
