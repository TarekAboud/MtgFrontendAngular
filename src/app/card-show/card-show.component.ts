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

@Component({
  selector: 'app-card-show',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet, RouterModule, CommonModule, NgFor
  ],
  templateUrl: './card-show.component.html',
  styleUrl: './card-show.component.css'
})
export class CardShowComponent {

  

  onSetClick(e: any) {
    console.log(e);
    this.getCardsFromSet(e.itemData.code).subscribe(
      (data: CardData[]) => {
        this.setCards = data;
        console.log(this.setCards);
      },
      error => {
        console.error(error);
      }
    );
  }

  getCardsFromSet(setId: Text): Observable<CardData[]> {
    let pageNumber = 1;
    let itemsPerPage = 10; 
    return this._http.get<CardData[]>(this.ApiUrl + 'GetCardsFromSet?code=' + setId + '&pageNumber=' + pageNumber + '&itemsPerPage=' + itemsPerPage)
      .pipe(
        tap(_ => console.log('fetched cards for set: ' + setId))
      );
  }
}
