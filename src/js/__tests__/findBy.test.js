import findBy from '../findBy';

test('should check array', () => {
  const input = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const expected = [
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  ];

  const result = input.filter(findBy('type', 'attack'));
  expect(result).toEqual(expected);
});
