import { Result } from './search.model';
import { Subject } from 'rxjs';

//since we dont have an API and they dont change we will store these here.
const terms = [ "Random", "Real", "Record", "Red", "Report" ];

export class SearchService {
    resultsChanged = new Subject<Result[]>();

    private results: Result[] = [];

    getResults(values: string) {
        if ( values.length === 0  ) {
            //the text field is empty and should not have results.
            this.results = [];
        } else {
            //lets just clear the past results and build a new one
            this.results = [];
            //loop over the values in the text box and compare to the terms provided.
            //creating a Object like JSON data to simiulate an API result.
            for (let i = 0; i < terms.length; i++) {
                if (terms[i].substr(0, values.length).toUpperCase() == values.toUpperCase()) {
                    let data:Result = { substring: terms[i].substr(0, values.length).toLowerCase(), string: terms[i].substr(values.length).toLowerCase() };
                    this.results.push( data  );
                }
            }
        }
        this.resultsChanged.next([ ...this.results]);
    }
}

