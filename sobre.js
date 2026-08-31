
const botoes = document.querySelectorAll('.btn_topico'); /* botoes = procura o seletor (.btn_topico) */

botoes.forEach(botao => { /*Faz uma ação para cada botão --> para cada botão encontrado faça....*/
    botao.addEventListener('click', () => { /*Adiciona um evento para o botão atual... quando clicarem faça oq tiver na caixa.... */
        const caixa = botao.nextElementSibling;/*Pula para a div de baixo do botão atual(caixa) */
        caixa.classList.toggle('aberto'); /*Adiciona aberto na class */
    });
});