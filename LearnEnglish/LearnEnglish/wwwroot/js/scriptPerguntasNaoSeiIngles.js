document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }

    let quantidadeRespostasCertasNaoSei = 0;
    let quantidadeRespostasCertasIniciante = 0;

    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");
    const botaoNaoSei = document.getElementById("BotaoInglesNaoSei");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const botaoInglesIniciante = document.getElementById("botaoInglesIniciante");
    const botaoInglesAmador = document.getElementById("botaoInglesAmador");
    const botaoInglesFluente = document.getElementById("botaoInglesFluente");
    const vamosBotao = document.getElementById("VamosBotao");

    const PrimeiraPergunta = document.getElementById("PrimeiraPerguntaNaoSei");
    const SegundaPergunta = document.getElementById("SegundaPerguntaNaoSei");
    const TerceiraPerguntaNaoSei = document.getElementById("TerceiraPerguntaNaoSei");
    const QuartaPerguntaNaoSei = document.getElementById("QuartaPerguntaNaoSei");
    const QuintaPerguntaNaoSei = document.getElementById("QuintaPerguntaNaoSei");

    const PrimeiraPerguntaIniciante = document.getElementById("PrimeiraPerguntaIniciante");
    const SegundaPerguntaIniciante = document.getElementById("SegundaPerguntaIniciante");
    const TerceiraPerguntaIniciante = document.getElementById("TerceiraPerguntaIniciante");
    const QuartaPerguntaIniciante = document.getElementById("QuartaPerguntaIniciante");
    const QuintaPerguntaIniciante = document.getElementById("QuintaPerguntaIniciante");

    const avancarPrimeiraPerguntaNaoSei = document.getElementById("avancarPrimeiraPerguntaNaoSei");
    const avancarSegundaPerguntaNaoSei = document.getElementById("avancarSegundaPerguntaNaoSei");
    const avancarTerceiraPerguntaNaoSei = document.getElementById("avancarTerceiraPerguntaNaoSei");
    const avancarQuartaPerguntaNaoSei = document.getElementById("avancarQuartaPerguntaNaoSei");
    const avancarQuintaPerguntaNaoSei = document.getElementById("avancarQuintaPerguntaNaoSei");



    let usuarioNaoSabeIngles = false;
    let usuarioIniciante = false;

    botaoNaoSei.addEventListener("click", () => {
        usuarioNaoSabeIngles = true;
        usuarioIniciante = false;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    botaoInglesIniciante.addEventListener("click", () => {
        usuarioNaoSabeIngles = false;
        usuarioIniciante = true;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    botaoInglesAmador.addEventListener("click", () => {
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    botaoInglesFluente.addEventListener("click", () => {
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    vamosBotao.addEventListener("click", () => {
        TesteRapidoBotoes.style.display = "none";
        if (usuarioNaoSabeIngles) {
            PrimeiraPergunta.style.display = "block";
        } else if (usuarioIniciante) {
            PrimeiraPerguntaIniciante.style.display = "block";
        }
    });

    avancarPrimeiraPerguntaNaoSei.addEventListener("click", () => {
        PrimeiraPergunta.style.display = "none";
        SegundaPergunta.style.display = "block";
    });

    avancarSegundaPerguntaNaoSei.addEventListener("click", () => {
        SegundaPergunta.style.display = "none";
        TerceiraPerguntaNaoSei.style.display = "block";
    });

    avancarTerceiraPerguntaNaoSei.addEventListener("click", () => {
        TerceiraPerguntaNaoSei.style.display = "none";
        QuartaPerguntaNaoSei.style.display = "block";
    });

    avancarQuartaPerguntaNaoSei.addEventListener("click", () => {
        QuartaPerguntaNaoSei.style.display = "none";
        QuintaPerguntaNaoSei.style.display = "block";
    });

    avancarQuintaPerguntaNaoSei.addEventListener("click", () => {
        QuintaPerguntaNaoSei.style.display = "none";
        alert(`Você acertou: ${quantidadeRespostasCertasNaoSei} questões`);
    });

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