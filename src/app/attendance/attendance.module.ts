import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttendanceEntryComponent } from './entry/entry.component';
import { AttendanceSearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AttendanceEntryComponent,
    AttendanceSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
