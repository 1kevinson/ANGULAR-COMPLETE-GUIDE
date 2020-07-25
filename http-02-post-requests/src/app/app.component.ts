import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { error } from "util";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching: boolean = false;
  allDeleted: boolean = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
    // Subscribe to error on initialize the component
    this.errorSub = this.postsService.errorHandler.subscribe((errorMsg) => {
      this.error = errorMsg;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.allDeleted = false;
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    //If we don't subscribe, no request will be sent
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (errorResponse) => {
        this.postsService.errorHandler.next(errorResponse.error["error"]);
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
      this.allDeleted = true;
    });
  }

  ngOnDestroy(): void {
    // UnSubscribe to error on Destroying the component
    this.errorSub.unsubscribe();
  }
}
