import { Component } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-searchedword',
  standalone: true,
  imports: [],
  templateUrl: './searchedword.component.html',
  styleUrl: './searchedword.component.css'
})
export class SearchedwordComponent {
  showMoreSynonyms: boolean = false;
  
 constructor(public dataService: DataServiceService){}
 
 
 fetchMeaning(synonym: string) {
  this.dataService.searchedWords = synonym; 
  this.dataService.getHttps(); 
}



toggleMoreSynonyms() {
  this.showMoreSynonyms = !this.showMoreSynonyms;
}

}
