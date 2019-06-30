import { Component, OnInit } from '@angular/core';


import { AccountDataService } from '../account-data.service';
import { Address } from '../address';


@Component({
  selector: 'address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  listOfAddress: Address[];
  editAddress: Address

  constructor(private accountDataService: AccountDataService) { 

  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.accountDataService.data.subscribe(data => {
      this.listOfAddress = data;
    })
  }

  OnAddressUpdate(event: Address) {
    let obj = [{...event}]
    let a = this.listOfAddress.concat(obj);
    const update: Address[] = this.convertArray(a);
    this.accountDataService.updatedAccountSelection(update);
}

onEditar(data) {
this.editAddress = data
}

// Override array in order to insert changes in data DB (Api to do)
private convertArray(arr): Address[] {
  
 return Object.values(arr.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}))
}

}
