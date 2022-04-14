---
title: Integrate Payment into your Mobile App with paymennt
sidebar_label: Mobile Payment
---

Make getting paid faster and easier than ever! **paymennt** APIs provide an easy way to let your customers pay for their orders easily and securely.

:::danger SERVER API CALL
API calls made to the **paymennt** API endpoints should be made from your backend server. You should **NEVER** include your API key and secret in your mobile application. A malicious user can gain access to your account if those keys were exposed.
:::

## Integration flow

1. When a customer is ready to pay for their order/service on your mobile application, the mobile application sends a request to the backend server.
2. The backend server processes the order and makes the [Create mobile checkout](/api/#operation/create-mobile-checkout) API call to **paymennt** & obtains a checkout ID and a redirect URL.
3. Use the [Android SDK](/docs/integrate/sdks/android) and [iOS SDK](/docs/integrate/sdks/ios) provided by **paymennt** to complete the payment.
4. Alternatively, pass the redirect URL from **paymennt** API call to the mobile app and open it in a webview.
5. Once the webview Changes to one of the endpoints below, you should close the webview, and on your backend server, make the [Get Checkout](/api/#operation/get-checkout) API call to retrieve the status.
6. Based on the status of payment retrieved from the [Get Checkout](/api/#operation/get-checkout) API call, you should update your order status on your backend system, and display confirmation to the customer.

![Mobile integration flow](/img/docs/integrate/merchant-api/mobile-payment-flow.png)

That's it! You're ready to start testing.

## Payment confirmation endpoints

When the webview page URL changes to a confirmation endpoint, you should close the webview and check the payment status.

Confirmation endpoints:

- `{paymennt-pay-base-url}`**/complete**
- `{paymennt-pay-base-url}`**/success-redirect**
- `{paymennt-pay-base-url}`**/payment-confirmation**

Possible values for `{paymennt-pay-base-url}`:

Live : **https://pay.paymennt.com**

Test : **https://pay.test.paymennt.com**

## Test the Integration

1. Go to your mobile app and initiate the payment process.
2. You should see the **paymennt** payment page.
3. Enter the following card details:
   - Number: `4242 4242 4242 4242`
   - Expiry date: `12/25`
   - CVV: `100`
   - Name: `TEST USER`
4. Accept the **Terms & Conditions** and click **Pay**. You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive a payment confirmation email.
5. Check the status of the payment on your backend administration panel.

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
