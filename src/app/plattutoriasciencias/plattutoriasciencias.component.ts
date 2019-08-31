import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-plattutoriasciencias',
  templateUrl: './plattutoriasciencias.component.html',
  styleUrls: ['./plattutoriasciencias.component.css']
})
export class PlattutoriascienciasComponent implements OnInit {

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) {}

  filterPostt = 'CIENCIAS';

  data: any;
  private req: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit() {
    this.http.get('https://xaandrad.pythonanywhere.com/api/tutorship_schedules/').subscribe(data => {
        console.log(data);
        this.data = data as [any];
    }
    );
  }

}
