import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurListCompletePage } from './our-list-complete.page';

const routes: Routes = [
  {
    path: '',
    component: OurListCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurListCompletePageRoutingModule {}
