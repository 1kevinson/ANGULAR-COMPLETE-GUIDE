import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request : mandatory to subscribe to a response before the request send
    this.http
      .post(
        "https://ng-complete-guide-59510.firebaseio.com/posts.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    //No subscription no request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {
    // Pipe is use to manage the observable data before it's use
    this.http
      .get("https://ng-complete-guide-59510.firebaseio.com/posts.json")
      .pipe(
        map((responseData) => {
          const postArray = [];
          for (const key in responseData) {
            // check if the object have his own key
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
