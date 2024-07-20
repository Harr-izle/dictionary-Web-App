import { Component } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchedword',
  standalone: true,
  imports: [],
  templateUrl: './searchedword.component.html',
  styleUrl: './searchedword.component.css'
})
export class SearchedwordComponent {
  
 constructor(public dataService: DataServiceService){}
 
 
 fetchMeaning(synonym: string) {
  this.dataService.searchedWords = synonym; // Update searchedWords to the clicked synonym
  this.dataService.getHttps(); 
}

}
