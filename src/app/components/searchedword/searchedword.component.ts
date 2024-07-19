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
  
 constructor(public dataService: DataServiceService){}
 

}
