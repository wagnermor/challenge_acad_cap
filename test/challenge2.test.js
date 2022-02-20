const challenge = require('../src/challenge2');

describe('questao2', () => {
  it('valida senha', () => {
    expect(challenge.checkPassword("Ya3&ab")).toMatch(`OK!`)
  })
})
