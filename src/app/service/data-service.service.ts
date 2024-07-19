import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Idictionary, IMeaning } from '../interfaces/data';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  responseData:Idictionary ={
    word: '',
    phonetics: [],
    meanings: [],
    sourceUrls: [],
    audio: ''
  }
  searchedWords: string =""


  constructor(private apiService: ApiServiceService) { }

getHttps(){
  this.apiService.getHttp(this.searchedWords).subscribe(response => {
    this.responseData = response[0];
 
    for (let i = 0; i < this.responseData.phonetics.length; i++) {
      if (this.responseData.phonetics[i].audio.length > 0) {
        this.responseData.phonetics = [this.responseData.phonetics[i]]
      }
    }
    
      console.log(this.responseData);
      
  }, error => {
    console.error('Error fetching data:', error);
  });
}


}
