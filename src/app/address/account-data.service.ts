import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountDataService {
 
  private dataSource = new BehaviorSubject<Array<Address>>([]);
  data = this.dataSource.asObservable()

  constructor() {
   
  }
 

  updatedAccountSelection(data: Address[]){
    
    this.dataSource.next(data);
     
  }
}






