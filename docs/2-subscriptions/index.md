---
title: subscriptions
sidebar_label: subscriptions
slug: /subscriptions
hide_title: false
hide_table_of_contents: false
---

## how it works

On this page we describe the steps required to manage customer subscriptions, a customer subscription is a recurring payment link that is sent to a customer based on a specific schedule.

## create a new subscription

When your customer subscribes for a recurring payment option, create a new subscription by making a call from your server to <a href="/api/#operation/create-subscription" target="_blank">`POST /subscription`</a>. In your request, you must include the following required parameters:

| **Parameter**  | **Description**                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`  | The description of this subscription, this description will be shown in the invoice on the payment/confirmation pages.                                                                                                                            |
| `currency`     | ISO 4217 Currency Code (3 letter currency code)                                                                                                                                                                                                   |
| `amount`       | A positive decimal number representing the amount customer should pay                                                                                                                                                                             |
| `customerId`\* | The customer ID at **paymennt** Database, this is not required when the `customer` details are provided.                                                                                                                                          |
| `customer`\*   | Customer that the Payment link will be sent to, the system will make a lookup on the customers to find the customer with the same Phone/Email, if not found new customer will be created, this is not required when the `customerId` is provided. |
| `startDate`    | The start date of the subscription in format (yyyy-MM-dd), This will be used as a reference date for the scheduled payment requests.                                                                                                              |
| `sendOnHour`   | The hour of day (UTC) that the link wil be sent on.                                                                                                                                                                                               |
| `sendEvery`    | This is a string representing the frequency of the payment link sending, possible values are `DAY` `WEEK` `TWO_WEEKS` `MONTH` `TWO_MONTHS` `THREE_MONTHS` `SIX_MONTHS` `YEAR`.                                                                    |

Below is an example of how you would create a new subscription for **100.00 AED**:

```bash title="curl"
curl -L -X POST "https://api.test.paymennt.com/mer/v2.0/subscription" \
-H "X-POINTCHECKOUT-KEY: YOUR_X-POINTCHECKOUT-KEY" \
-H "X-POINTCHECKOUT-SECRET: YOUR_X-POINTCHECKOUT-SECRET" \
-H "content-type: application/json" \
-d '{
  "description": "dozen of cookies",
  "currency": "AED",
  "amount": 100.00,
  "customer": {
    "id": "",
    "firstName": "[Firstname]",
    "lastName": "[Lastname]",
    "email": "[EMAIL]",
    "phone": "[PHONE]"
  },
  "startDate": "2021-08-24",
  "endDate": "2024-08-24",
  "sendOnHour": 10,
  "sendEvery": "THREE_MONTHS"
}'
```

this subscription will be sent to the customer every three months starting from 2021-08-28, so for this example the second payment link will be sent on 2021-11-28 and so on.

:::danger PAST SUBSCRIPTION
If you create a subscription with a start date in the past, the first payment link will be **SENT IMMEDIATELY** once you create teh subscription,
:::

## Pause/Resume subscription

The response from **Step 1** above will result in a new checkout being successfully created for your merchant account. Once received, you should take note of the checkout `id` and redirect the user browser to the `redirectUrl`

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
    "redirectUrl": "https://pay.test.paymennt.com/checkout/checkout_key",
    ...
  }
}
```
