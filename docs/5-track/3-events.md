---
title: Event payloads
sidebar_label: Event Payloads
---

Each webhook message contains an event type and a JSON object representing the checkout state when the event was published.

The event catalog currently exposes six checkout lifecycle events:

![Webhook event catalog](/img/docs/webhooks/event-catalog.png)

| Event type | Meaning |
| --- | --- |
| `checkout.created` | A checkout was created. |
| `checkout.paid` | A checkout was paid. |
| `checkout.failed` | A checkout failed. |
| `checkout.cancelled` | A checkout was cancelled. |
| `checkout.expired` | A checkout expired. |
| `checkout.refunded` | A checkout was refunded. |

## Checkout payload

The payload is a JSON object. Its fields include checkout, merchant, customer, amount, payment-method, and status information. Fields that do not apply to a specific checkout may be `null`.

```json
{
  "id": "checkout-id",
  "displayId": "checkout-reference",
  "status": "PAID",
  "currency": "AED",
  "grandtotal": 100.0,
  "totalRefunded": 0.0,
  "merchantId": "merchant-id",
  "merchantName": "Merchant name",
  "branchId": "branch-id",
  "branchName": "Branch name",
  "customerId": "customer-id",
  "customerFirstName": "First name",
  "customerLastName": "Last name",
  "customerEmail": "customer@example.com",
  "customerPhone": "+971500000000",
  "customerReference": "your-reference",
  "orderId": "order-id",
  "subscriptionId": "subscription-id",
  "referenceId": "payment-reference",
  "paidOn": "2026-01-01T00:00:00.000Z",
  "timestamp": "2026-01-01T00:00:00.000Z",
  "statusUpdateTimestamp": "2026-01-01T00:00:00.000Z",
  "usedPaymentMethod": "CARD"
}
```

Do not assume optional fields are populated. Build receivers to tolerate new fields and to handle `null` values.

## Event identity and retention

Paymennt assigns every published event a stable ID. Use it as the idempotency key for your processing. Message payloads are retained in the Merchant Portal for a configured retention period; do not rely on the portal as your system of record for long-term event storage.

The Event catalog currently does not display formal JSON schemas or example payloads for individual event types. This page is the published payload reference until those schemas are added to the catalog.
