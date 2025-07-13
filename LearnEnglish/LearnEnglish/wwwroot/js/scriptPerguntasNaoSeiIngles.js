document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }

    let quantidadeRespostasCertasNaoSei = 0;
    

    const botaoNaoSei = document.getElementById("BotaoInglesNaoSei");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const vamosBotao = document.getElementById("VamosBotao");
    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");

    

    const PrimeiraPergunta = document.getElementById("PrimeiraPerguntaNaoSei");
    const SegundaPergunta = document.getElementById("SegundaPerguntaNaoSei");
    const TerceiraPergunta = document.getElementById("TerceiraPerguntaNaoSei");
    const QuartaPergunta = document.getElementById("QuartaPerguntaNaoSei");
    const QuintaPergunta = document.getElementById("QuintaPerguntaNaoSei");

    const avancar1 = document.getElementById("avancarPrimeiraPerguntaNaoSei");
    const avancar2 = document.getElementById("avancarSegundaPerguntaNaoSei");
    const avancar3 = document.getElementById("avancarTerceiraPerguntaNaoSei");
    const avancar4 = document.getElementById("avancarQuartaPerguntaNaoSei");
    const avancar5 = document.getElementById("avancarQuintaPerguntaNaoSei");



    let usuarioNaoSabeIngles = false;
    

    botaoNaoSei.addEventListener("click", () => {
        usuarioNaoSabeIngles = true;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    vamosBotao.addEventListener("click", () => {
        if (usuarioNaoSabeIngles) {
            TesteRapidoBotoes.style.display = "none";
            PrimeiraPergunta.style.display = "block";
        }
    });

    avancar1.addEventListener("click", () => {
        PrimeiraPergunta.style.display = "none";
        SegundaPergunta.style.display = "block";
    });
    avancar2.addEventListener("click", () => {
        SegundaPergunta.style.display = "none";
        TerceiraPergunta.style.display = "block";
    });
    avancar3.addEventListener("click", () => {
        TerceiraPergunta.style.display = "none";
        QuartaPergunta.style.display = "block";
    });
    avancar4.addEventListener("click", () => {
        QuartaPergunta.style.display = "none";
        QuintaPergunta.style.display = "block";
    });

    avancar5.addEventListener("click", () => {
        QuintaPergunta.style.display = "none";
        alert(`Você acertou: ${quantidadeRespostasCertasNaoSei} questões`);
    }); //Precisa so ate aqui pra o programa aparecer

    document.getElementById("PrimeiraRespostaCertaNaoSei").addEventListener("click", () => {
        quantidadeRespostasCertasNaoSei += 1;
    });
    document.getElementById("SegundaRespostaCertaNaoSei").addEventListener("click", () => {
        quantidadeRespostasCertasNaoSei += 1;
    });
    document.getElementById("TerceiraRespostaCertaNaoSei").addEventListener("click", () => {
        quantidadeRespostasCertasNaoSei += 1;
    });
    document.getElementById("QuartaRespostaCertaNaoSei").addEventListener("click", () => {
        quantidadeRespostasCertasNaoSei += 1;
    });
    document.getElementById("QuintaRespostaCertaNaoSei").addEventListener("click", () => {
        quantidadeRespostasCertasNaoSei += 1;
    });
});