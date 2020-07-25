import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "./post.model";
import { catchError, map } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" }) // or provide in app Module
export class PostsService {
  errorHandler = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    // Send Http request : mandatory to subscribe to a response before the request send
    this.http
      .post<{ name: string }>(
        "https://ng-complete-guide-59510.firebaseio.com/posts.json",
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => this.errorHandler.next(error)
      );
  }

  fetchPosts() {
    //multiple HTTPparams
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("key", "value");

    // Pipe is use to transform the data with observable before it's handle
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-59510.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ "Custom-Header": "Hello" }),
          params: searchParams,
        }
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
        }),
        catchError((errorRes) => {
          // Per example Send Analytics server : Very Optional
          return throwError(errorRes);
        })
      );
  }

  clearPosts() {
    return this.http.delete(
      "https://ng-complete-guide-59510.firebaseio.com/posts.json"
    );
  }
}
