import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { DxSelectBoxModule, DxListModule, 
  DxTemplateModule } from 'devextreme-angular';
import {  } from 'devextreme-angular'
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { tap, catchError } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule, 
    DxSelectBoxModule, DxListModule, DxTemplateModule, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}


