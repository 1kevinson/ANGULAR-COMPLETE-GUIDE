import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveAssignmentComponent } from "./reactive-assignment/reactive-assignment.component";

const appRoutes: Routes = [
  { path: "reactive-assignment", component: ReactiveAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
