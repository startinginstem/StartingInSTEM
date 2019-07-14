import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { LinksComponent } from './links/links.component';
import { InsightComponent } from './insight/insight.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{path: 'insight', component: InsightComponent},
{ path: 'history', component: HistoryComponent },
{ path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }