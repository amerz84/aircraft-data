import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(private http: HttpClient) { }

  getDemoFile() {
    return this.http.get('assets/demofile.csv', { responseType: 'text' });
  }
}
