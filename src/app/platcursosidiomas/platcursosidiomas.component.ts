import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-platcursosciencias',
  templateUrl: './platcursosidiomas.component.html',
  styleUrls: ['./platcursosidiomas.component.css']
})
export class PlatcursosidiomasComponent implements OnInit {

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) {

  }
  filterPost = 'IDIOMAS';

  data: any;
  private req: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  ngOnInit() {
    this.http.get('https://xaandrad.pythonanywhere.com/api/courses/').subscribe(data => {
        console.log(data);
        this.data = data as [any];
    });
  }

}
