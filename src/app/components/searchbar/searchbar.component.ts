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
  word: string= ''
  constructor(private httpService:ApiServiceService,public dataService:DataServiceService) { }

  getHttp(){
    console.log(this.word);
    
    this.httpService.getHttp(this.word).subscribe(results =>{
      console.log(results);
    }, err => console.log(err));
  }
}
