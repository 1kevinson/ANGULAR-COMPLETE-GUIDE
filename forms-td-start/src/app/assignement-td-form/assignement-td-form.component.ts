import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-assignement-td-form",
  templateUrl: "./assignement-td-form.component.html",
  styleUrls: ["./assignement-td-form.component.css"],
})
export class AssignementTdFormComponent implements OnInit {
  defaultSubscription: string = "Advanced";
  // Retrieve form datas
  @ViewChild("f_assign") formAssign: NgForm;
  user: any = {
    email: "",
    password: "",
    subscription: "",
  };
  submitted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.user.email = this.formAssign.value["user-assign-data"].email;
    this.user.password = this.formAssign.value["user-assign-data"].password;
    this.user.subscription = this.formAssign.value.subscription;
    console.table(this.user);
  }
}
