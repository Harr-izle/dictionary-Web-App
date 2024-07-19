import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idictionary } from '../interfaces/data';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  

  constructor(private http:HttpClient) { }

  getHttp(word:string){
    return this.http.get<Idictionary[]>("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
  }


}
