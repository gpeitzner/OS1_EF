import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';
  data: any = [];

  username: string = '';
  password: string = '';
  token: string = '';
  text: string = '';

  constructor(private httpClient: HttpClient) {}

  loginEvent(): void {
    this.httpClient
      .post('http://35.239.22.19:8080/credentials', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (data) => {
          this.token = data['token'];
          this.getData();
          setTimeout(() => {
            this.token = '';
          }, 1800 * 1000);
        },
        (error) => console.log(error)
      );
  }

  getData(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };
    this.httpClient.get('http://35.239.22.19:8080/', httpOptions).subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  createRegister(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };
    this.httpClient
      .post('http://35.239.22.19:8080/', { text: this.text }, httpOptions)
      .subscribe(
        () => {
          this.getData(), (this.text = '');
        },
        (error) => console.log(error)
      );
  }
}
