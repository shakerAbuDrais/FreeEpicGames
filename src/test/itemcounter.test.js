import itemCounter from './itemcounter.js';

test('Test counts', () => {
  // Assign
  const items = [
    {
      item: 'item 1',
    },
    {
      item: 'item 1',
    },
    {
      item: 'item 1',
    },
  ];

  // Act
  const counter = itemCounter(items);

  // Assert
  expect(counter).toBe(3);
});