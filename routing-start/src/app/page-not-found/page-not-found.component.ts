import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"],
})
export class PageNotFoundComponent implements OnInit {
  isActivated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isActivated = this.authService.loggedIn;
  }
}
