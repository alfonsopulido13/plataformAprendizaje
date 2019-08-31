import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboardtutor',
  templateUrl: './dashboardtutor.component.html',
  styleUrls: ['./dashboardtutor.component.css']
})
export class DashboardtutorComponent implements OnInit {
  data: any;
  private req: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // localStorage.key(4);
    const id = localStorage.getItem('id');

    this.http
      .get(
        'https://xaandrad.pythonanywhere.com/api/tutor_users/' +
          id +
          '/courses/'
      )
      .subscribe(data => {
        console.log(data);

        this.data = data as [any];
      });
  }
}
