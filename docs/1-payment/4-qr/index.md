---
title: using qr codes to accept payments
sidebar_label: qr codes
---

Make getting paid faster and easier than ever! **paymennt** APIs provide an easy way to let your customers pay for their orders easily and securely.
QR Payments are especially useful when the customer is trying to make an in-store payment or making in-person payment on delivery.

## Integration flow

1. When a customer is ready to pay for their order, ٌYour system sends a [Create QR checkout](/api/#operation/create-qr-checkout) API call to **paymennt** API with the order details.
2. The response from the API call includes the `base64QR` which is Base64 encoded QR code PNG image data. This QR Code contains the URL for the checkout payment page.
3. Once you retrieve the QR image, you should present it to the customer ( On a mobile device, POS System, Web Page, or any kind of applicable display).
4. Once the customer scans the QR and completes the payment, call the [Get Checkout](/api/#operation/get-checkout) API call to retrieve the status.
5. Based on the status of payment retrieved from the [Get Checkout](/api/#operation/get-checkout) API call, you should update your order status on your system.
6. You can automate updating your system by either registering a Webhook (see [Webhooks API](/api/#tag/Webhooks))
7. Alternatively, each checkout is associated with a Google firebase document, the required firebase collection, database, and document names are included in the [Create QR checkout](/api/#operation/create-qr-checkout) API call response. see [Get realtime updates with Cloud Firestore](https://firebase.google.com/docs/firestore/query-data/listen) for more details.

![QR integration flow](/img/docs/integrate/merchant-api/qr-payment-flow.png)

That's it! You're ready to start testing.

## Test the Integration

1. Generate and present a new QR Image.
2. On a mobile device, Open a QR Scanner and scan the presented QR.
3. The scanned QR contains a link to the checkout payment page.
4. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
5. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email.
6. Check the status of the payment on your system.

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
