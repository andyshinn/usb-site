declare module '@elastic/app-search-javascript' {
  export interface ResultItem {
    getRaw(key: string): any;
    getSnippet(key: string): any;
  }

  export interface ResultList {
    rawInfo:  Object;
    rawResults: Array<Object>;
    results: Array<ResultItem>;
    info: Object;
  }

  export class Client {
    constructor(hostIdentifier: string, searchKey: string, engineName: string, {})
    search(query: string, options: object): Promise<ResultList>
  }

  export function createClient({searchKey, engineName, endpointBase}): Client
}
