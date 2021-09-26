import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.css']
})
export class SubmitOrderComponent implements OnInit {
  name: string = '';
  address: string = '';
  creditcardnumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.creditcardnumber.match(/^[0-9]+$/)) {
      alert("Invalid credit card number");
    }
    
    //Do anything here with the order and the user deatils

    alert("Order submitted!");
  }

}
