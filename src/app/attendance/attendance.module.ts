import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    EntryComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
