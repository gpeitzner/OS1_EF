import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "web";
  data: any = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("http://localhost:8080/").subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
