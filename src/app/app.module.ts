import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FaceCardComponent } from './face-card/face-card.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './projects.service';
import { AppearDirective } from './directives/appeared-once';
import { GithubComponent } from './github/github.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FaceCardComponent,
    AboutComponent,
    AppearDirective,
    SkillsComponent,
    ProjectsComponent,
    GithubComponent,
    ProjectModalComponent,
    LandingComponent,
  ],
  entryComponents: [
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ],
  providers: [
    GithubService,
    ProjectsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
