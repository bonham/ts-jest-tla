## Using top-level await with Jest

### Don't take my word for it

🚀 Run `yarn test` to show top-level await working.

### Hard-earned lessons

The key things to make sure of are:

- You need `jest` and `ts-jest` version 27 or higher.

- These settings need to be in your Jest config:

  ```json
  "jest": {
    "preset": "ts-jest/presets/default-esm",
    "globals": {
      "ts-jest": {
        "useESM": true
      }
    }
  }
  ```

- You need `"type": "module"` in `package.json`.

- In `tsconfig.json`, you need

  ```json
    "target": "esnext",
    "module": "esnext"
  ```

  (The top-level await error says that targeting es2017 or higher would work, but only esnext has worked for me.)

- Jest needs to be run with the `--experimental-vm-modules` flag. For example my `test` script looks like this:

  ```json
  "test": "node --no-warnings --experimental-vm-modules node_modules/jest/bin/jest.js"
  ```

  The `--no-warnings` flag isn't strictly necessary, but otherwise you get yelled at on every test run that `--experimental-vm-modules` is experimental. 🙄
