import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  project: Project;
  name: string;
  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.project = this.projectService.getProject(this.name);
  }

}
