import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" }) // or provide in app Module
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    // Send Http request : mandatory to subscribe to a response before the request send
    this.http
      .post<{ name: string }>(
        "https://ng-complete-guide-59510.firebaseio.com/posts.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    // Pipe is use to transform the data with observable before it's handle
    this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-59510.firebaseio.com/posts.json"
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            // check if the object have the key
            if (responseData.hasOwnProperty(key)) {
              // push key : value by mergin with spread operator
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
