const challenge = require('../src/challenge1');

describe('questao1', () => {
  it('imprime triangulo', () => {
    expect(challenge.stars(6)).toMatch(`     *
    **
   ***
  ****
 *****
******`)
  })
});
