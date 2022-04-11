---
title: Get checkout details
slug: details
---

:::danger SERVER API CALL
API calls made to the PointCheckout API endpoints should be made from your server. You should NEVER include your API keys in your mobile application. A mallicious user can gain access to your account if those keys are exposed.
:::

To retrieve the details and status of a checkout  , make an API call from your server to <a href="/api/#operation/get_checkout" target="_blank">`GET /checkout/{checkoutId}`</a>. The `checkoutId` is the ID received during the craetion of the checkout.

Here's an example of how you can query the status of checkout with id `1653241101733169556`:

```bash title="curl"
curl -L -X GET "https://api.test.pointcheckout.com/mer/v2.0/checkout/1653241101733169556" \
-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \
-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \
-H 'Content-Type: application/json'
```

The response received for a valid checkout would be similar to the one below.

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
    ...
  }
}
```
