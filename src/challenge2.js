// # Questão 2
function checkPassword(password) {
  const passwordSize = new RegExp('(?=.{6,}).*$');
  const minOneDig = new RegExp('[0-9]');
  const minOneLowercase = new RegExp('[a-z]');
  const minOneUppercase = new RegExp('[A-Z]');
  const mandatoryCharacter = new RegExp('["!@#$%^&*()-+"]');

  if(!passwordSize.test(password)) {
    return 6 - password.length;
  } else if(!minOneDig.test(password)) {
    return `Senha com no mínimo um dígito numérico`;
  } else if(!minOneLowercase.test(password)) {
    return `Senha com no mínimo 1 letra em minúsculo`;
  } else if(!minOneUppercase.test(password)) {
    return `Senha com no mínimo 1 letra em maiúsculo`;
  } else if(!mandatoryCharacter.test(password)) {
    return `Senha com no mínimo 1 caractere especial:!@#$%^&*()-+`;
  } else {
    return `OK!`;
  }
}
// console.log(checkPassword("Ya@sdw3ab"));

module.exports = {
  checkPassword: checkPassword
}
