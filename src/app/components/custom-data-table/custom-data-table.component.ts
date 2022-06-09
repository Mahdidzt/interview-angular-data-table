import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-custom-data-table',
  templateUrl: './custom-data-table.component.html',
  styleUrls: ['./custom-data-table.component.css']
})
export class CustomDataTableComponent implements OnInit {

  @Input()
  header: Array<string> = [];

  @Input()
  items: Array<any> = [];

  selectedItem: any;

  sortDirection: boolean = true;

  @ViewChild('modalForm', {static: true}) modalForm: ModalDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  sort() {
    this.items = this.items.sort(this.sortDirection ? this.sortDesc : this.sortAsc);
    this.sortDirection = !this.sortDirection;
  }

  sortAsc(a: any, b: any) {
    return a.id - b.id;
  }

  sortDesc(a: any, b: any) {
    return b.id - a.id;
  }

  showModal(item: any) {
    this.selectedItem = item;
    this.modalForm.show();
  }

  show() {

  }

  close() {
    this.modalForm.hide();
  }
}
