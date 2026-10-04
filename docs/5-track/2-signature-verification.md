---
title: Verify webhook signatures
sidebar_label: Verify Signatures
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Verify a webhook before using its payload. Signature verification proves that the request was created by Paymennt and helps prevent replay attacks.

The verification must use the exact raw request body. Do not parse, pretty-print, decode, or otherwise alter the body before verifying it.

## Signing headers

Every webhook request includes these headers:

| Header | Purpose |
| --- | --- |
| `message-id` | A stable identifier for the delivery. Replays of the same message keep this value. |
| `message-timestamp` | The Unix timestamp, in seconds, for the delivery attempt. |
| `message-signature` | One or more versioned, Base64-encoded signatures separated by spaces. |

Get the endpoint's signing secret from **Developer → Webhooks → Endpoints → Settings**. Store it in your server-side secret manager; never expose it to a browser or mobile application.

## Verify a signature manually

Use your endpoint signing secret to calculate an HMAC-SHA256 digest of the following string:

```text
{message-id}.{message-timestamp}.{raw-request-body}
```

The calculated digest must match one `v1` value in the `message-signature` header. Compare signatures in constant time.

<Tabs groupId="webhook-verification-language" className="webhook-code-tabs">
<TabItem value="node" label="Node.js" default>

```js
import crypto from 'node:crypto';

function verifyPaymenntWebhook({ rawBody, headers, signingSecret }) {
  const messageId = headers['message-id'];
  const timestamp = headers['message-timestamp'];
  const signatureHeader = headers['message-signature'];

  if (!messageId || !timestamp || !signatureHeader) {
    return false;
  }

  // Signing secrets are Base64 encoded. Remove the optional identifier prefix
  // before decoding when your stored value includes one.
  const secretValue = signingSecret.replace(/^whsec_/, '');
  const signedContent = `${messageId}.${timestamp}.${rawBody}`;
  const expectedSignature = crypto
    .createHmac('sha256', Buffer.from(secretValue, 'base64'))
    .update(signedContent)
    .digest('base64');

  return signatureHeader
    .split(' ')
    .filter((value) => value.startsWith('v1,'))
    .map((value) => value.slice(3))
    .some((candidate) => {
      const expected = Buffer.from(expectedSignature);
      const received = Buffer.from(candidate);
      return expected.length === received.length
        && crypto.timingSafeEqual(expected, received);
    });
}
```

</TabItem>
<TabItem value="php" label="PHP">

```php
function verifyPaymenntWebhook(string $rawBody, array $headers, string $signingSecret): bool
{
    $messageId = $headers['message-id'] ?? null;
    $timestamp = $headers['message-timestamp'] ?? null;
    $signatureHeader = $headers['message-signature'] ?? null;

    if (!$messageId || !$timestamp || !$signatureHeader) {
        return false;
    }

    $secretValue = preg_replace('/^whsec_/', '', $signingSecret);
    $signedContent = "{$messageId}.{$timestamp}.{$rawBody}";
    $expectedSignature = base64_encode(hash_hmac(
        'sha256',
        $signedContent,
        base64_decode($secretValue, true),
        true,
    ));

    foreach (explode(' ', $signatureHeader) as $value) {
        if (str_starts_with($value, 'v1,')
            && hash_equals($expectedSignature, substr($value, 3))) {
            return true;
        }
    }

    return false;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.Map;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

boolean verifyPaymenntWebhook(
    String rawBody,
    Map<String, String> headers,
    String signingSecret
) throws Exception {
    String messageId = headers.get("message-id");
    String timestamp = headers.get("message-timestamp");
    String signatureHeader = headers.get("message-signature");

    if (messageId == null || timestamp == null || signatureHeader == null) {
        return false;
    }

    String secretValue = signingSecret.replaceFirst("^whsec_", "");
    String signedContent = messageId + "." + timestamp + "." + rawBody;
    Mac hmac = Mac.getInstance("HmacSHA256");
    hmac.init(new SecretKeySpec(
        Base64.getDecoder().decode(secretValue),
        "HmacSHA256"
    ));
    String expectedSignature = Base64.getEncoder().encodeToString(
        hmac.doFinal(signedContent.getBytes(StandardCharsets.UTF_8))
    );

    for (String value : signatureHeader.split(" ")) {
        if (value.startsWith("v1,") && MessageDigest.isEqual(
            expectedSignature.getBytes(StandardCharsets.UTF_8),
            value.substring(3).getBytes(StandardCharsets.UTF_8)
        )) {
            return true;
        }
    }

    return false;
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import base64
import hashlib
import hmac


def verify_paymennt_webhook(raw_body: str, headers: dict, signing_secret: str) -> bool:
    message_id = headers.get("message-id")
    timestamp = headers.get("message-timestamp")
    signature_header = headers.get("message-signature")

    if not message_id or not timestamp or not signature_header:
        return False

    secret_value = signing_secret.removeprefix("whsec_")
    signed_content = f"{message_id}.{timestamp}.{raw_body}"
    expected_signature = base64.b64encode(
        hmac.new(
            base64.b64decode(secret_value),
            signed_content.encode("utf-8"),
            hashlib.sha256,
        ).digest()
    ).decode("utf-8")

    return any(
        value.startswith("v1,")
        and hmac.compare_digest(expected_signature, value[3:])
        for value in signature_header.split(" ")
    )
```

</TabItem>
</Tabs>

Call this function with the raw body represented as the same UTF-8 string that was received on the wire. Parse the body as JSON only after it returns `true`.

## Reject stale deliveries

Check `message-timestamp` against your server clock before accepting the request. Use a short tolerance window appropriate to your service, such as five minutes. Reject a delivery outside that window even when its signature is valid.

Also record each `message-id` after successful processing. If the same ID is received again, acknowledge it safely without repeating the business action.

## Common verification failures

- **The raw body changed.** JSON middleware, request parsers, or character conversion ran before verification.
- **The wrong secret is in use.** Each endpoint has its own signing secret. Reveal or rotate the secret in that endpoint's settings.
- **Only one signature was checked.** A signature header can contain multiple versioned values. Check every `v1` value.
- **The timestamp is stale.** Confirm your server has accurate time synchronization and use a bounded tolerance window.
