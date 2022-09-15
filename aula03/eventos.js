let turma = [
    'alexandre',
    'erika',
    'Davi',
    'Igor',
];

turma.push('Alicia');
turma[5] = 'Italo';
turma.push('Talyson');

turma[3] += 'Elias'; //substitui o Igor

turma[6] += 'Soares'

let quantidade = turma.length;

for (let n = 0; n < quantidade; n++) {
    document.write(`${turma[n]} <br>`);
}