import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //Useful to retrieve data even if we don't submit the form
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer = "";
  genders: Array<string> = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signupForm);
  }
}
