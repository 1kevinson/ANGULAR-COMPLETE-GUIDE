import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AssignementTdFormComponent } from "./assignement-td-form/assignement-td-form.component";

const appRoutes: Routes = [
  { path: "assignement", component: AssignementTdFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
