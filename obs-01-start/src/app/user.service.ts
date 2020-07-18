import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  // Populate event across the app
  activatedEmitter = new Subject<boolean>();
}
