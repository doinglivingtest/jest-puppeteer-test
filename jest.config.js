module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_test_environment.js',
  testPathIgnorePatterns: ["/__tests__/pages/", "/node_modules/"],
};