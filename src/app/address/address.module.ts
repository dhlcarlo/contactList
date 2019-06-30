import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AddressRoutingModule } from './address-routing.module';
import { AccountDataService } from './account-data.service';
import { SharedModule } from '../shared/shared.module';



import { AddressComponent } from './address-home/address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AddressRoutingModule
  ],
  declarations: [AddressComponent, AddressEditComponent, AddressListComponent],
  providers: [AccountDataService]
})
export class AddressModule { }
