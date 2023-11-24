import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Skills } from 'src/app/skills/api-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class SkillSMainComponent {
  constructor(private http: HttpClient) { }
  skills: Skills[] = [];
  fetchAllSkills() {
    const apiUrl = environment.apiBaseUrl + '/skills';
    this.http.get<Skills[]>(apiUrl).subscribe(response => {
      console.log(response);
      this.skills = response;
    });
  }
}
