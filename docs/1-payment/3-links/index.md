---
title: payment links
sidebar_label: payment links
---

Make getting paid faster and easier than ever! **paymennt** APIs provide an easy way to let your customers pay for their orders easily and securely.

## Integration flow

1. When a customer is ready to pay for their order/service, ٌYour system sends a [Create payment link checkout](/api/#operation/create-link-checkout) API call to **paymennt** API with the order details.
2. In the request you can either provide customer phone/email within the billing address and set the `sendSms` and/or `sendEmail` request parameters to `true` so that **paymennt** will send the payment link to the customer contact phone/email or you can get the payment redirect link from the response and share it with your customer.
3. In your backend system, you can either listen to Google Firestort notifications for the document related to the checkout ( see the response from the [Create payment link checkout](/api/#operation/create-link-checkout) API call), for more details on how to listen to Firebase messages in your system see [Get realtime updates with Cloud Firestore](https://firebase.google.com/docs/firestore/query-data/listen). Alternatively you can register to receive checkout updates via Webhooks, see [Webhooks API](/api/#tag/Webhooks).
4. Once your system is notified of a payment update, you should call the [Get Checkout](/api/#operation/get-checkout) API call to retrieve the status.
5. Based on the status of payment retrieved from the [Get Checkout](/api/#operation/get-checkout) API call, you should update your order status on your system and provide the service to your customer if payment was complete.

![Payment link integration flow](/img/docs/integrate/merchant-api/link-payment-flow.png)

That's it! You're ready to start testing.

## Test the Integration

1. Create a new payment link.
2. Open the link in your internet browser.
3. Once the payment page shows, Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
4. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email.
5. Check the status of the payment on your system.

## Checkout Statuses

A checkout can have multiple statuses that describe the current state that the checkout is in.

| STATUS                 | DETAILS                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **PENDING**            | New Checkout. User has not completed the payment.                                                                         |
| **AUTHORIZED**         | The payment has been authorized, a subsequent Capture or Cancel payment API call is expected before the checkout Expires. |
| **PAID**               | This status is effective when a customer has successfully completed the payment associated with this checkout.            |
| **FAILED**             | Payment failed due to payment failure. **paymennt** failed to recover such a checkout process.                            |
| **CANCELLED**          | User cancelled the checkout process and returned to the merchant page.                                                    |
| **EXPIRED**            | Checkout has expired without being processed                                                                              |
| **REFUNDED**           | Checkout has been fully refunded to the Shopper                                                                           |
| **PARTIALLY_REFUNDED** | Checkout have been partially refunded to the shopper                                                                      |
