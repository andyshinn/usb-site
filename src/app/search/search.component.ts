import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { QuoteService } from '../quote.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public model: any

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void { }

  // search = (text: Observable<string>) =>
  //   text.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? [] : this.quoteService.search(term).then(rawResults => rawResults))
  //   );

  search = (text: Observable<string>) =>
    text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => this.quoteService.search(term)),
      map(rawResults => rawResults.map(result => result['content']['raw']))
    )

  formatter = (x: { content: string }) => x.content;
}
