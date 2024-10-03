import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetSearchComponent } from './set-search/set-search.component';
import { AppComponent } from './app.component';
import { CardShowComponent } from './card-show/card-show.component';

export const routes: Routes = [
  { path: 'set-search', component: SetSearchComponent },
  { path: 'card-show/:code', component: CardShowComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }