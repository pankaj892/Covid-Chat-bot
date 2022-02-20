import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  confirmed: any;
  recovered: any;
  deaths: any;

  allData: any;
  constructor(private http: HttpClient) {
    this.http.get('https://api.rootnet.in/covid19-in/stats/latest')
      .subscribe(gdata => {
        this.allData = gdata

        setTimeout(() => {
          this.confirmed = this.allData.data.summary.total
          this.recovered = this.allData.data.summary.discharged
          this.deaths = this.allData.data.summary.deaths
        }, 1500);

      }
      )

  }
}
