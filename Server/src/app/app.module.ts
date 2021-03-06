import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { NavbarComponent } from './navbar/navbar.component';
import {HighlightModule} from 'ngx-highlightjs';

import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import cs from 'highlight.js/lib/languages/cs';
import typescript from 'highlight.js/lib/languages/typescript';
import vbnet from 'highlight.js/lib/languages/vbnet';
import vbscript from 'highlight.js/lib/languages/vbscript';
import {NgCircleProgressModule} from 'ng-circle-progress';

export function hljsLanguages() {
  return [
    {name: 'java', func: java},
    {name: 'javascript', func: javascript},
    {name: 'xml', func: xml},
    {name: 'cs', func: cs},
    {name: 'typescript', func: typescript},
    {name: 'vbnet', func: vbnet},
    {name: 'vbscript', func: vbscript}
  ];
}

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
    FooterComponent,
    NavbarComponent
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
    MatToolbarModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
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
