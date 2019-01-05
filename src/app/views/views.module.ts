import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ViewsComponent } from './views.component';
import { LogInModule } from './log-in/log-in.module';
import { ViewsRoutingModule } from './views-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { MaterialModule } from '../material-module';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [ViewsComponent, SettingComponent],
  imports: [
    CommonModule,
    HomeModule,
    TemplatesModule,
    LogInModule,
    ViewsRoutingModule,
    MaterialModule,
  ]
})
export class ViewsModule { }
