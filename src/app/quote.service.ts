import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { createClient, Client } from '@elastic/app-search-javascript';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  client: Client;

  constructor() {
    this.client = createClient({
      searchKey: environment.apiKey,
      engineName: environment.engineName,
      endpointBase: 'http://localhost:3002'}
    );
  }

  search(text: string) {
    return this.client.search(text, {search_fields: { content: {} }}).then(resultList => resultList.rawResults)
  }
}
