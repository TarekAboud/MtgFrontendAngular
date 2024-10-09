import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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
import { NgFor } from '@angular/common';
import { SetData, CardData, ImageUris } from '../models/SetDataModel'
import { ActivatedRoute } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator'
import { Paginator } from 'primeng/paginator'
import { ImageModule } from 'primeng/image'
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-card-show',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet, RouterModule, 
    CommonModule, NgFor, PaginatorModule,
    ImageModule, CheckboxModule
  ],
  templateUrl: './card-show.component.html',
  styleUrl: './card-show.component.css'
})
export class CardShowComponent {
  sets: SetData[] = [];
  setCards?: any=[];
  setCode?: any;
  filteredArt: boolean;
  readonly ApiUrl = "http://localhost:2766/api/cards/" 

  constructor(private route: ActivatedRoute, private _http: HttpClient) {
    this.filteredArt = false;
  }

  ngOnInit() {
    console.log("hi im here");
    this.setCode = this.route.snapshot.paramMap.get('code');
    console.log(this.setCode);
    this.getCards(this.setCode, this.filteredArt);

  }

  filterArt()
  {
    this.getCards(this.setCode, this.filteredArt);
  }


  getCards(setId: Text, filteredArt: boolean) {
    console.log(setId);
    this.getCardsFromSet(setId, filteredArt).subscribe(
      (data: CardData[]) => {
        this.setCards = data;
        console.log(this.setCards);
      },
      error => {
        console.error(error);
      }
    );
  }

  getCardsFromSet(setId: Text, filteredArt: boolean): Observable<CardData[]> {
    let pageNumber = 1;
    let itemsPerPage = 10; 
    return this._http.get<CardData[]>(this.ApiUrl + 'GetCardsFromSet?code=' + setId + '&filteredArt=' + filteredArt)
      .pipe(
        tap(_ => console.log('fetched cards for set: ' + setId))
      );
  }
}
