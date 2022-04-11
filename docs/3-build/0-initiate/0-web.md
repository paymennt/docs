---
title: Web payment
slug: web
hide_title: false
hide_table_of_contents: false
---

On this page we describe the steps required to initiate and verify a payment via the PointCheckout payment gateway for web based applications

## How it works

Three steps are required in order to accept payments via the PointCheckout payment gateway for web-based applications:

1. Create a new Web Checkout specifying the `returnURL` where user is redirected after payment
2. Redirect user to the `redirectURL` received in the response
3. On return, Query the API for the payment status

The diagram below shows the overall flow to be used in order to accept payments using the PointCheckout
web integration

![Website integration flow](/img/docs/build/initiate/web-flow.png)

## Step 1: Create a new checkout

:::danger SERVER API CALL
API calls made to the PointCheckout API endpoints should be made from your server. You should NEVER include your API keys in your mobile application. A malicious user can gain access to your account if those keys are exposed.
:::

When your shopper is ready to pay, create a new web checkout by making a call from your server to <a href="/api/#operation/create-web-checkout" target="_blank">`POST /checkout/web`</a>. In your request, you must include the following required parameters:

**Parameter**|**Description**
--|--
`requestId` | A unique Identifier for this request, can be used later to query the status on the checkout
`orderId`   | This can be the order ID. Must match any reference shown to the user during checkout / order history
`currency`  | ISO 4217 Currency Code (3 letter currency code)
`amount`    | A positive decimal number representing the amount customer should pay
`returnUrl` | Customer will be redirected to this URL after a successful or failed payment

Here's an example of how you would create a new checkout for **100.00 AED**:

```bash title="curl"
curl -L -X POST "https://api.test.pointcheckout.com/mer/v2.0/checkout/web" \
-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \
-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \
-H "content-type: application/json" \
-d '{
  "requestID": "EXAMPLE-123.1",
  "orderID": "EXAMPLE-123",
  "currency": "AED",
  "amount": 100.00,
  "returnUrl": "https://shop.example.com/returnUrl",
  "customer": {...},
  "billingAddress": {...},
  "deliveryAddress": {...},
  "items": [...]
}'
```

:::tip Failed or cancelled orders
If a payment fails or customer cancels the the payment, you cannot reuse the same `requestId`. You can however use the same `orderId` to create a new checkout.
:::

## Step 2: Redirect user to payment page
The response from **Step 1** above will result in a new checkout being succesffully created for your merchant account. Once received, you should take note of the checkout `id` and redirect the user browser to the `redirectUrl`

```jsx title="200 Response"
{
  "success": true,
  "elapsed": 12,
  "result": {
    "id": "1653241101733169556",
    "requestId": "EXAMPLE-123.1",
    "orderId": "EXAMPLE-123",
    "currency": "AED",
    "amount": 100.00,
    "status": "PENDING",
    "redirectUrl": "https://pay.test.pointcheckout.com/checkout/checkout_key",
    ...
  }
}
```
## Step 3: Verifying payment status
Once the payment process has completed (regardless of status), the customer will be redirected back to the `returnUrl` provided in **Step 1**.

To verify the payment status, make an API call from your server to <a href="/api/#operation/get_checkout" target="_blank">`GET /checkout/{checkoutId}`</a>. The `checkoutId` is the ID received in the server response in **Step 1**


Here's an example of how you can query the status of checkout with id `1653241101733169556`:

```bash title="curl"
curl -L -X GET "https://api.test.pointcheckout.com/mer/v2.0/checkout/1653241101733169556" \
-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \
-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \
-H 'Content-Type: application/json'
```

:::tip CONFIRMING CHECKOUT IS `PAID`
A paid checkout will have the status of `PAID`. If the checkout has a status other than paid, you should either display and error or take the user back to the checkout flow.
:::

### Checkout status values

Below is a list of available status codes that may be provided via the PointCheckout API to describe the status of a checkout:

STATUS | DETAILS
:-- | :--
**`PENDING`** | New Checkout. User has not completed the payment.
**`AUTHORIZED`** | The payment has been authorized. A subsequent `CAPTURE` or `CANCEL` API call is expected before expiry.
**`PAID`** | This status is effective when a customer has successfully completed the payment associated with this checkout.
**`FAILED`** | Payment failed due to payment failure. PointCheckout failed to recover such a checkout process.
**`CANCELLED`** | User cancelled the checkout process and returned to the merchant page.
**`EXPIRED`** | Checkout has expired without being processed
**`REFUNDED`** | Checkout has been fully refunded to customer
**`PARTIALLY_REFUNDED`** | Checkout have been partially refunded to customer

## Step 4: Test the Integration
Once your integration is ready, you can use the below test card details to verify your integration
* Number: `4242 4242 4242 4242`
* Expiry date: `12/25`
* CVV: `100`
* Name: `TEST USER`

:::info GO LIVE REQUIREMENTS
Before receiving your live API Key and Secret, make sure your web application is compliant with our website requirements. To learn more, view the [Website go-live checklist](/guides/developer/website-checklist).
:::
