const { Jest } = require('skuba');

module.exports = Jest.mergePreset({
  coveragePathIgnorePatterns: ['src/testing'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/test\\.ts'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
});
