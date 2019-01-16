import { Component, OnInit } from '@angular/core';
import { Result } from './search.model';
import { Subscription } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchSubscription: Subscription;
  isSearching: boolean  = false;
  results: Result[] = [];
  searchValue: string = '';

  //lets inject the search service.
  constructor( private searchService:SearchService) { }

  ngOnInit() {
    //lets subscribe to changes from the results in the search service.
    this.searchSubscription = this.searchService.resultsChanged.subscribe(
      (results: Result[]) => {
        if (results.length > 0) {
          this.results = results;
          this.isSearching = true;
        } else {
          this.results = [];
          this.isSearching = false;
        }
      }
    )
  }

  //this is for the clearing or hitting enter of the search box
  //since we are not really searching we will not impliment the enter and search , 
  //however we will handle it as if the X was clicked.
  onSearch(event: Event) {
    if ((<HTMLInputElement>event.target).value) {
      console.log("we would search for something but we are not really searching");
    } else {
      //we shall clear it
      this.searchValue = '';
      this.results = [];
      this.isSearching = false;
    }
  }

  //this is a little bit old school way of getting form events but works well.
  //Could have used ngForm and listened to changes 
  //but this works really nice since we wont be submitting the form.
  onKey(event: KeyboardEvent) { 
    this.searchService.getResults((<HTMLInputElement>event.target).value);
  }

  //If we click on the list 
  onResultClicked( result: Result) {
    this.searchValue = result.substring + result.string;
    this.isSearching = false;
  }
}
