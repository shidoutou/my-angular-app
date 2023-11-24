import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsModule } from './skills/skills.module';
import { NavbarComponent } from './navbar/navbar.component';
import { EntryComponent } from './attendance/entry/entry.component';
import { SearchComponent } from './attendance/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntryComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SkillsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
