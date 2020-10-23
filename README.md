# Can't use top-level await with ts-jest

`npm run tla` shows that top-level await works with `ts-node`.

`npm test` shows that the `await` line in `add.test.js` causes error TS1378:

> Top-level 'await' expressions are only allowed when the 'module' option is set to 'esnext' or 'system', and the 'target' option is set to 'es2017' or higher.

However, [`tsconfig.json`](tsconfig.json) already contains these settings:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext"
  }
}
```
