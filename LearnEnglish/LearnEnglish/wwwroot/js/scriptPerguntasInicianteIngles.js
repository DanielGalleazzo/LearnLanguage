document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }
    let quantidadeRespostasCertasIniciante = 0;

    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");
    const botaoIniciante = document.getElementById("botaoInglesIniciante");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const botaoInglesIniciante = document.getElementById("botaoInglesIniciante");
    const botaoInglesAmador = document.getElementById("botaoInglesAmador");
    const botaoInglesFluente = document.getElementById("botaoInglesFluente");
    const vamosBotao = document.getElementById("VamosBotao");

    const PrimeiraPerguntaIniciante = document.getElementById("PrimeiraPerguntaIniciante");
    const SegundaPerguntaIniciante = document.getElementById("SegundaPerguntaIniciante");
    const TerceiraPerguntaIniciante = document.getElementById("TerceiraPerguntaIniciante");
    const QuartaPerguntaIniciante = document.getElementById("QuartaPerguntaIniciante");
    const QuintaPerguntaIniciante = document.getElementById("QuintaPerguntaIniciante");

    const avancarPrimeiraPerguntaIniciante = document.getElementById("avancarPrimeiraPerguntaIniciante");
    const avancarSegundaPerguntaIniciante = document.getElementById("avancarSegundaPerguntaIniciante");
    const avancarTerceiraPerguntaIniciante = document.getElementById("avancarTerceiraPerguntaIniciante");
    const avancarQuartaPerguntaIniciante = document.getElementById("avancarQuartaPerguntaIniciante");
    const avancarQuintaPerguntaIniciante = document.getElementById("avancarQuintaPerguntaIniciante");

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
        if (usuarioIniciante) {
            PrimeiraPerguntaIniciante.style.display = "block";
        } 
    });
    avancarPrimeiraPerguntaIniciante.addEventListener("click", () => {
        PrimeiraPerguntaIniciante.style.display = "none";
        SegundaPerguntaIniciante.style.display = "block";
    });
    avancarSegundaPerguntaIniciante.addEventListener("click", () => {
        SegundaPerguntaIniciante.style.display = "none";
        TerceiraPerguntaIniciante.style.display = "block";
    });
    avancarTerceiraPerguntaIniciante.addEventListener("click", () => {
        TerceiraPerguntaIniciante.style.display = "none";
        QuartaPerguntaIniciante.style.display = "block";
    });
    avancarQuartaPerguntaIniciante.addEventListener("click", () => {
        QuartaPerguntaIniciante.style.display = "none";
        QuintaPerguntaIniciante.style.display = "block";
    });
    avancarQuintaPerguntaIniciante.addEventListener("click", () => {
        QuintaPerguntaIniciante.style.display = "none";
        alert(`Você acertou: ${quantidadeRespostasCertasIniciante} questões`);
    });

    document.getElementById("PrimeiraRespostaCertaIniciante").addEventListener("click", () => {
        quantidadeRespostasCertasIniciante += 1;
    });
    document.getElementById("SegundaRespostaCertaIniciante").addEventListener("click", () => {
        quantidadeRespostasCertasIniciante += 1;
    });
    document.getElementById("TerceiraRespostaCertaIniciante").addEventListener("click", () => {
        quantidadeRespostasCertasIniciante += 1;
    });
    document.getElementById("QuartaRespostaCertaIniciante").addEventListener("click", () => {
        quantidadeRespostasCertasIniciante += 1;
    });
    document.getElementById("QuintaRespostaCertaIniciante").addEventListener("click", () => {
        quantidadeRespostasCertasIniciante += 1;
    });

}