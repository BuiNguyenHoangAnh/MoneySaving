import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            { path: '', component: LogInComponent },
            { path: 'home', component: HomeComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
