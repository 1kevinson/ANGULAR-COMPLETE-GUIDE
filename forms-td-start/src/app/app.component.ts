import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Useful to retrieve data that are in the form (type NgForm)
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer = "";
  genders: Array<string> = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
    /* this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: "",
      },
      secret: "pet",
      questionAnswer: "",
      gender: "male",
    });*/

    // Better approach to modify only one value of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signupForm);
  }
}
