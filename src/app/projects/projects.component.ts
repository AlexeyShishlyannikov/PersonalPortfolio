import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ProjectsService, Project } from '../projects.service';
import { MatDialog } from '@angular/material';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  numberOfCommits = 0;
  projects: Project[];
  hovered = false;
  constructor(
    private github: GithubService,
    private projectsService: ProjectsService,
    private dialog: MatDialog
  ) {  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  openContent() {
    this.dialog.open(ProjectModalComponent);
  }
  get matchMedia(): boolean {
    const mq = window.matchMedia('(max-width: 768px)');
    return mq.matches;
  }
}
