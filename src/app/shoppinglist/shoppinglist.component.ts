import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../services/list.service';
import { ValidateUrl } from '../validators/custom.validator';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  itemForm = new FormGroup({
    itemName: new FormControl()
  });
  btnVisisbility = false;
  index: number;
  constructor(private form: FormBuilder, public listService: ListService) { }

  ngOnInit() {
    this.itemForm = this.form.group({
      itemName: ['', [Validators.minLength(5), Validators.required,
        ValidateUrl]]
    });
  }
  onAdd() {
    this.listService.addItem(this.itemForm.get('itemName').value);
    this.itemForm.reset();
  }

  onDelete(p) {
    this.listService.deleteItem(p);
  }
  onEdit(p) {
    this.index = this.listService.listitem.indexOf(p);
    console.log(this.index);
    this.btnVisisbility = true;
    this.itemForm.setValue({
      itemName: p});
  }
  onUpdate() {
      this.listService.updateItem(this.itemForm.get('itemName').value, this.index);
      this.btnVisisbility = false;
      this.itemForm.reset();
  }

}
