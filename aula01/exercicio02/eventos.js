function cadastrar() {
    event.preventDefault();
    tabela.innerHTML += `<tr>
        <td>${nome.value}</td>
        <td>${email.value}</td>
        <td>${telefone.value}</td>
        <td>${cidade.value}</td>
    </tr>`
}

