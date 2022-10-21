import commentsCounter from './commentsCounter.js';

test('Test counts', () => {
  // Assign
  const items = ['hey', 'hello world', '2', 'nice website'];

  // Act
  const counter = commentsCounter(items);

  // Assert
  expect(counter).toBe(4);
});