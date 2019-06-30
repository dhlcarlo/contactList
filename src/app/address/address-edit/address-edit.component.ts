import { Component, OnInit, Inject, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Address } from '../address';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import { ToastService } from 'src/app/core';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit, OnChanges {


  form: FormGroup;
   address: Address;
   @Input() editAddress;
   @Output() addressUpdate = new EventEmitter();


  constructor(
    private toastService: ToastService,
    private fb: FormBuilder) {
      this.form = this.configForm();
      this.form.valueChanges.subscribe(data => this.address = this.processingForm(data))
    }

  ngOnInit() {

  }
   ngOnChanges(changes: SimpleChanges): void {
   
   if (changes.editAddress.currentValue) {
    this.form.patchValue({
      name: changes.editAddress.currentValue.name,
      street: changes.editAddress.currentValue.street,
      zip: changes.editAddress.currentValue.zip,
      country: changes.editAddress.currentValue.country
      })
   }

  }

  private configForm() {
    return this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[ABC]{3}[A-Z0-9]{2}$/)]],
      country: ['', Validators.required]
  });
  }

  private processingForm(value) {
     const filtro = <Address>new Object();
     if(this.editAddress) {
      filtro.id = this.editAddress.id;
     } else {
       filtro.id = Date.now();
     }
    
     if(value.name) {
       filtro.name = value.name;
     }

     if (value.street) {
       filtro.street = value.street
     }

     if (value.zip) {
      filtro.zip =  value.zip;
    }

    if (value.country) {
      filtro.country = value.country
    }

     return filtro;
  }

  save() {
    this.addressUpdate.emit(this.address);
    this.form.reset();
    this.editAddress = null;
     this.toastService.openSnackBar('Good!', 'cop');
}



}
