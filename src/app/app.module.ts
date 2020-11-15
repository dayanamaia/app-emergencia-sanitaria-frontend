import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { ChartDetailComponent } from './shared/components/chart-detail/chart-detail.component';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';
import { MonthPipePipe } from './shared/pipes/month-pipe.pipe';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProgressBarComponent,
    ChartDetailComponent,
    LineChartComponent,
    MonthPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
