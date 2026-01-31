function contar(inicio, fim, passo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Contando:</p>';

    let i = Number(inicio);
    let f = Number(fim);
    let p = Number(passo);

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        p = 1;
    }

    if (i < f) {
        for (let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449}`;
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c} \u{1F449}`;
        }
    }
    resultado.innerHTML += '\u{1F3C1}';
}