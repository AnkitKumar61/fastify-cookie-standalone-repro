# Standalone cookie helpers regression

Minimal reproduction for `@fastify/cookie@11.1.5`.

```sh
npm ci --ignore-scripts
npm run repro:parse
npm run repro:serialize
```

Run the two reproduction scripts separately. Each starts a fresh Node.js process.

`repro:parse` throws `TypeError: Cannot read properties of null (reading 'parseCookie')`.

`repro:serialize` throws `TypeError: Cannot read properties of null (reading 'stringifySetCookie')`.

The expected results are an object whose `sid` property is `'abc'` and the string `'sid=abc'`, respectively.

Verified with Node.js 24.4.1 on Windows 10.0.26300. The same calls succeed with `@fastify/cookie@11.0.2`.
