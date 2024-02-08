import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { DxSelectBoxModule, DxListModule, 
  DxTemplateModule } from 'devextreme-angular';
import {  } from 'devextreme-angular'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, HttpClientModule, 
    DxSelectBoxModule, DxListModule, DxTemplateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MagicTheGatheringLotrFrontend';
  readonly ApiUrl = "http://localhost:2766/api/cards/" 
  sets: any=[];
  setCards: any=[];

  constructor(private _http: HttpClient) {
  }


  refreshSets() {
    this._http.get(this.ApiUrl + 'GetAllSets')
    .subscribe( {
      next: (d) => {this.sets = d},
      error: (e) => console.error(e) 
    })
  }

  onSetClick(e: any) {
    console.log(e);
    this.getAllSetCards(e.itemData.code);
  }

  getAllSetCards(setId: Text) {
    this._http.get(this.ApiUrl + 'GetSetCards?setId=' + setId)
    .subscribe( {
      next: (d) => {this.setCards = d},
      error: (e) => console.error(e) 
    })
  }

  ngOnInit() {
    this.refreshSets();
  }

}
