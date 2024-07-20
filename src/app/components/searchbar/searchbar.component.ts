import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../../service/data-service.service';


@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  isEmptySearch: boolean = false;

  constructor(private httpService: ApiServiceService, public dataService: DataServiceService) { }

  searchWord() {
    if (!this.dataService.searchedWords || this.dataService.searchedWords.trim() === '') {
      this.isEmptySearch = true;
      return;
    }

    this.isEmptySearch = false;
    this.dataService.getHttps();
  }
}