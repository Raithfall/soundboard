import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule, MatMenuModule, MatToolbarModule, MatGridListModule, MatTableModule, MatDialogModule,
  MatRadioModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatStepperModule,
  MatButtonModule, MatSnackBarModule, MatListModule, MatButtonToggleModule, MatSelectModule, MatProgressBarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatStepperModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatButtonToggleModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
