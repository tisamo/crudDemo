import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TreeModel} from '../interfaces/tree-model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TreeListItem} from '../interfaces/tree-list-item';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  constructor(private httpClient: HttpClient) {
  }

  getIndex(): Observable<TreeListItem[]> {
    return this.httpClient.get<TreeListItem[]>(this.getBaseUrl());
  }

  getTree(id: number): Observable<TreeModel> {
    return this.httpClient.get<TreeModel>(this.getBaseUrl() + id);
  }

  create(tree: TreeModel) {
    return this.httpClient.post(this.getBaseUrl(), tree);
  }

  edit(tree: TreeModel) {
    return this.httpClient.put(this.getBaseUrl() + tree.id, tree);
  }

  delete(id: number) {
    return this.httpClient.delete(this.getBaseUrl() + id);
  }

  private getBaseUrl(): string {
    return environment.apiUrl + 'tree/';
  }
}
