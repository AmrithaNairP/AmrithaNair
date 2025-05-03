const assert = require('assert');
const greet = require('./app');
try {
  assert.strictEqual(greet('World'), 'Hello, World!');
  assert.strictEqual(greet('CI/CD'), 'Hello, CI/CD!');
  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}
