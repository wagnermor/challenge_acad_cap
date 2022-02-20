# DESAFIO DE PROGRAMAÇÃO - ACADEMIA CAPGEMINI

Este repositório contém três questões do desafio de programação para Academia Capgemini.


## Questão 01

- Nome do arquivo: challenge1.js
- Nome da função: stars(n)
- Exemplo de entrada: console.log(stars(6));
- Exemplo de saída:
<pre>
  A|B|C|D|E|F
1           *
2         * *
3       * * *
4     * * * *
5   * * * * *
6 * * * * * *
</pre>

## Questão 02

- Nome do arquivo: challenge2.js
- Nome da função: checkPassword("password")
- Critérios de entrada:
   * Possui no mínimo 6 caracteres;
   * Contém no mínimo 1 digito;
   * Contém no mínimo 1 letra em minúsculo;
   * Contém no mínimo 1 letra em maiúsculo;
   * Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
- 
- Exemplo de entrada: console.log(checkPassword("Y2@"));
- Exemplo de saída: 3


## Questão 03

- Nome do arquivo: challenge3.js
- Nome da função: anagram("word")
- Exemplo de entrada: console.log(anagram("OVo"));
- Exemplo de saída: 2

## Como usar este repositório

**Instalar todas as dependências**
```
npm install
```

**Execute todos os testes**
```
npm test
```

**Executar testes por nome**
```
npm test -- 'challenge1'
npm test -- 'challenge2'
npm test -- 'challenge3'
```
