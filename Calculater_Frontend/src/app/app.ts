import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Calculater_Frontend');
  private http: HttpClient;
  formula : string ="";

  constructor(http: HttpClient) {
    this.http = http;
  }

  numberClick(value: string) {
    this.formula += value;
  }

  multyClick() {
    this.formula += "*";
  }

  clearClick() {
    this.formula = "";
  }

  equalsClick() {
      const headers = new HttpHeaders({ 'Content-Type': 'text/plain;charset=utf-8'});
      this.http.post('http://localhost:8080/app/calculate', this.formula, { headers, responseType: 'text' })
        .subscribe(result => {
          this.formula = result;
        }, error => {
          console.error('Error:', error);
        });
  }
}
