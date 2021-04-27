import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-payment',
  templateUrl:'./payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
    this.loadStripe();
  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

pay(amount:any) {

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51INkPuHYTKm9Y5kRr11Xi0np8f8vFME44pHqbQPxEe4Bd2KV2I9okuKRMLuz4YrlHxpSEd82WSp7SlF0GRBX71qz00UN43AH7x',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}


}
