import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { DxSelectBoxModule, DxListModule, 
  DxTemplateModule } from 'devextreme-angular';
import {  } from 'devextreme-angular'
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { tap, catchError } from 'rxjs';
import { AppComponent } from '../app.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-set-search',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, HttpClientModule, 
    DxSelectBoxModule, DxListModule, DxTemplateModule, AppComponent, RouterLink, RouterModule
  ],
  templateUrl: './set-search.component.html',
  styleUrl: './set-search.component.css'
})
export class SetSearchComponent {
  title = 'MagicTheGatheringLotrFrontend';
  readonly ApiUrl = "http://localhost:2766/api/cards/" 
  sets: SetData[] = [];
  setCards?: any=[];

  constructor(private _http: HttpClient) {
  }


  refreshSets() {
    this._http.get<SetData[]>(this.ApiUrl + 'GetAllSets')
    .subscribe( {
      next: (d: SetData[]) => {
        console.log('API Response:', d);
        this.sets = d;
      },
      error: (e) => console.error(e) 
    })
  }



  ngOnInit() {
    this.refreshSets();
  }
}

export interface SetData {
  block: string
  booster: string[]
  border: any
  code: string
  expansion: any
  gathererCode: any
  magicCardsInfoCode: any
  name: string
  oldCode: any
  onlineOnly: boolean
  releaseDate: string
  type: string
}


export interface CardData {
  name: string;
  image_uris: ImageUris;
}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}