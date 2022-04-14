paymennt provides a collection of APIs that enable you to process and manage payments. Our APIs accept and return JSON in the HTTP body, and return standard HTTP response codes. You can consume the APIs directly using your favorite HTTP/REST library or make use of one of our SDKs.

# Introduction

Learn how to integrate our APIs into your application

## API Basics

paymennt API gives you access to pretty much all the features you can use on our dashboard and lets you extend them for use in your application. It strives to be RESTful and is organized around the main resources you would be interacting with - with a few notable exceptions.

## Requests and Response

Both request body data and response data are formatted as JSON. Content type for responses will always be `application/json`. Generally, all responses will be in the following format:

```js
{
  "success": [boolean], // true indicates a successfull operation
  "elapsed": [number], // time spent server side processing the request
  "error": [string], // if success is false, this will indicate the error
  "result": [object] // the result of the operation
}
```

# Authentication

Petstore offers two forms of authentication:

- API Key
- OAuth2
  OAuth2 - an open protocol to allow secure authorization in a simple
  and standard method from web, mobile and desktop applications.

<SecurityDefinitions />
