
let dia = 1; //inicio
while (dia <= 31) { //fim/condição
    selectDia.innerHTML += `<option>${dia}</option>`;
    dia++; //passo/incremento
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
];

meses.forEach(function (cadaMes) {
    selectMes.innerHTML += `<option>${cadaMes}</option>`;
});

let ano = 2022;
while (ano >= 1900) {
    selectAno.innerHTML += `<option>${ano}</option>`;
    ano--;
}