import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails.bind(this)),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }


  get controls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // Always return null or don't use return statement in this case
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject)=> {
      setTimeout(()=> {
        if(control.value === 'test@test.com') {
          resolve({'emailsForbidden' : true});
        } else {
          resolve(null)
        }
       }, 1500)
    })
  }

}
