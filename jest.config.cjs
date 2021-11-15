module.exports = {
  // https://jestjs.io/docs/ecmascript-modules
  transform: {},
  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/#use-esm-presets; 'manual configuration' didn't work
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testEnvironment: 'node',
  testRegex: '.*.test.ts',
}
