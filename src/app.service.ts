import { Injectable } from '@nestjs/common';
const stripe = require('stripe')('sk_test_51M6xsMSGQlxq8EadTBFdHldKvFMwhpZSerARXb8qLIZW3AUQFBo6SyIgpkwy1g7NDDes6iNyU2XWG6yaDzjTVrxY00FKXNtQyx')
 

@Injectable()
export class AppService {
  async getHello() {
    
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: 'price_1MIT3ZSGQlxq8EadT0j9QNMc', quantity: 3 }],
      mode: 'payment',
      payment_intent_data: {
        setup_future_usage: 'on_session',
      },
      customer: 'cus_N2YAmRC6YKWslj',
      success_url:
        'http://localhost:3000' +
        '/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000' + '/pay/failed/checkout/session',
    });

    return session;

  }


  async SuccessSession(Session) {

    console.log(Session);
    

  }
}
