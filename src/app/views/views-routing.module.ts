import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SettingComponent } from './setting/setting.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: ViewsComponent,
        children: [
            { path: '', component: LogInComponent },
            { path: 'home', component: HomeComponent },
            { path: 'setting', component: SettingComponent },
            { path: 'statistic', component: StatisticComponent },
            { path: 'about', component: AboutComponent },
            // { path: '', component: SettingComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
