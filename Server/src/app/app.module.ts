import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { EducationComponent } from './education/education.component';
import { DetailsComponent } from './details/details.component';
import { TertiaryEducationComponent } from './tertiary-education/tertiary-education.component';
import { SecondaryEducationComponent } from './secondary-education/secondary-education.component';
import { RefereesComponent } from './referees/referees.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule, MatIconModule, MatListModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    AboutComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    EmploymentHistoryComponent,
    EducationComponent,
    DetailsComponent,
    TertiaryEducationComponent,
    SecondaryEducationComponent,
    RefereesComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
