function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('div');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao__conteudo__frente">
                <h3>${categoria}</h3>
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__verso">
                <h3>Resposta</h3>
                <p>${resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener('click', function() {
        this.classList.toggle('virado');
    });

    container.appendChild(cartao);
}