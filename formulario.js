function salvarDados() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const zona = document.getElementById('zona').value;
    const materiaisDoar = [];
    document.querySelectorAll('input[name="material_doar[]"]:checked').forEach(function (checkbox) {
        materiaisDoar.push(checkbox.value);
    });

    const materiaisColetar = [];
    document.querySelectorAll('input[name="material_coletar[]"]:checked').forEach(function (checkbox) {
        materiaisColetar.push(checkbox.value);
    });

    const outrosDescricao = document.getElementById('outros_descricao').value;
    const outrosDescricaoColetar = document.getElementById('outros_descricao_coletar').value;
    if (nome && endereco && email && telefone && zona && (materiaisDoar.length > 0 || materiaisColetar.length > 0)) {
        const dados = {
            nome: nome,
            endereco: endereco,
            email: email,
            telefone: telefone,
            zona: zona,
            materiaisDoar: materiaisDoar,
            materiaisColetar: materiaisColetar,
            outrosDescricao: outrosDescricao,
            outrosDescricaoColetar: outrosDescricaoColetar
        };

        localStorage.setItem('dadosFormulario', JSON.stringify(dados));

        alert('Dados enviados com sucesso!');

        document.getElementById('myForm').reset();
    } else {

        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}