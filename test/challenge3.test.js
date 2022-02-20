const challenge = require('../src/challenge3');

describe('questao2', () => {
  it('valida senha', () => {
  })
  expect(challenge.anagram("BaHIA")).toBe(1);
  expect(challenge.anagram("ovO")).toBe(2);
  expect(challenge.anagram("ifailuhkqQ")).toBe(3);
})