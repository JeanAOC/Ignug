import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BreadcrumbService} from "@services/core";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(
    private breadcrumbService:BreadcrumbService,
    private readonly router: Router,
    ) {
    breadcrumbService.setItems([{label: 'Dashboard'}])
  }
/**
 * create function to navigate moodle
 */
  navigateMoodleList() {
    this.router.navigate(['/moodle/category-list']);
  }

  /**
   * crear function to navigate CategoryFormComponent
   */
  navigateCategoryForm() {
    this.router.navigate(['/moodle/category-form']);
    }

  }
