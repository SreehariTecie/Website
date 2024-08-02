import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  react: boolean = false;
  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Sree-Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.Typescript);
    }
    if (this.angular) {
      filterTags.push(Tag.Angular);
    }
    if (this.javascript) {
      filterTags.push(Tag.JavaScript);
    }
    if (this.react) {
      filterTags.push(Tag.React);
    }

    if (this.typescript || this.angular || this.javascript || this.react) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.javascript = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
