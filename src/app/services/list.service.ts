import { Injectable } from '@angular/core';
import {ListModel} from '../models/list.model';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: ListModel = new ListModel();
  listitem: any[] = [];
  constructor() { }
  addItem(item: string) {
    this.list.item.push(item);
    this.listitem = this.list.item;
    console.log(this.listitem);
  }
  deleteItem(item: any) {
    const index = this.list.item.indexOf(item);
    this.list.item.splice(index, 1);
    this.listitem = this.list.item;
    console.log(index);
    console.log(this.listitem);
  }
  updateItem(item: any, index) {
      this.list.item[index] = item;
      this.listitem = this.listitem;
  }
}
