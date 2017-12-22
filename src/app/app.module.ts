import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DataService} from './service/data.service';
import {SliderComponent} from './component/slider/slider.component';
import {PositionsComponent} from './component/positions/positions.component';
import {IntervalComponent} from './component/interval/interval.component';
import {ActionsComponent} from './component/actions/actions.component';
import {TimerComponent} from './component/timer/timer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    SliderComponent,
    IntervalComponent,
    ActionsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
