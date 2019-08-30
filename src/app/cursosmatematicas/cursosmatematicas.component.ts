import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-cursosmatematicas',
  templateUrl: './cursosmatematicas.component.html',
  styleUrls: ['./cursosmatematicas.component.css']
})
export class CursosmatematicasComponent implements OnInit {

  constructor(private http: HttpClient, private breakpointObserver: BreakpointObserver) {

  }
  filterPost = 'MATEMÁTICAS';

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
