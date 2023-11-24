import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { skills } from 'src/app/skills/api-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  constructor(private http: HttpClient) { }
  skills: skills[] = [];
  fetchAllSkills() {
    const apiUrl = environment.apiBaseUrl + '/skills';
    this.http.get<skills[]>(apiUrl).subscribe(response => {
      console.log(response);
      this.skills = response;
    });
  }
}
