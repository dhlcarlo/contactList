import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges  } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input() listOfAddress: Address[];
  @Output() onSelectItem = new EventEmitter();

  displayedColumns: string[] = [ 'name', 'street', 'zip', 'country'];
  dataSource: MatTableDataSource<Address>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource<Address>(this.listOfAddress);
  }

  ngOnInit() {
  
   
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    if (changes.listOfAddress.currentValue) {
      this.dataSource = new MatTableDataSource<Address>(changes.listOfAddress.currentValue);
    }
  }
  editAddress(datos) {
    this.onSelectItem.emit(datos);
  }
}


