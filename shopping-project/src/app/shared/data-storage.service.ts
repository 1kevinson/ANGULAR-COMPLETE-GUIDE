import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// Add @Injectable it as soon we have to inject a service into this service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {
  }
}
