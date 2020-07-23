import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive-assignment",
  templateUrl: "./reactive-assignment.component.html",
  styleUrls: ["./reactive-assignment.component.css"],
})
export class ReactiveAssignmentComponent implements OnInit {
  assignForm: FormGroup;
  allStatus: string[] = ["stable", "critical", "finished"];
  forbiddenName: string = "Test";

  ngOnInit(): void {
    this.assignForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(
          null,
          [Validators.required],
          this.nameForbidSync.bind(this)
        ),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      status: new FormControl("critical"),
    });
  }

  onSubmit() {
    console.log(this.assignForm);
  }

  //Custom Validator static
  nameForbid(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenName === control.value) {
      // Log the error in NgForm
      return { nameIsForbidden: true };
    }
    return null;
  }

  //Custom Validator async
  nameForbidSync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.forbiddenName === control.value) {
        resolve({ nameIsForbidden: true });
      } else {
        resolve(null);
      }
    });
  }
}
