function tabuada() {
    const numInput = document.getElementById('txtn');
    const tabuadaSelect = document.getElementById('seltab');

    if (numInput.value.length === 0) {
        alert('Por favor, digite um número para gerar a tabuada.');
    } else {
        const num = Number(numInput.value);
        tabuadaSelect.innerHTML = ''; // Limpa o select antes de adicionar novos valores

        for (let c = 1; c <= 10; c++) {
            const item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            item.value = `tab${c}`;
            tabuadaSelect.appendChild(item);
        }
    }
}