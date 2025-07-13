document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }

    let quantidadeRespostasCertasIniciante = 0;
    const botaoIniciante = document.getElementById("botaoInglesIniciante");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const vamosBotao = document.getElementById("VamosBotao");
    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");

    let usuarioIniciante = false;

    const PrimeiraPergunta = document.getElementById("PrimeiraPerguntaIniciante");
    const SegundaPergunta = document.getElementById("SegundaPerguntaIniciante");
    const TerceiraPergunta = document.getElementById("TerceiraPerguntaIniciante");
    const QuartaPergunta = document.getElementById("QuartaPerguntaIniciante");
    const QuintaPergunta = document.getElementById("QuintaPerguntaIniciante");

    const avancar1 = document.getElementById("avancarPrimeiraPerguntaIniciante");
    const avancar2 = document.getElementById("avancarSegundaPerguntaIniciante");
    const avancar3 = document.getElementById("avancarTerceiraPerguntaIniciante");
    const avancar4 = document.getElementById("avancarQuartaPerguntaIniciante");
    const avancar5 = document.getElementById("avancarQuintaPerguntaIniciante");

    
    botaoIniciante.addEventListener("click", () => {
        usuarioIniciante = true;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });

    vamosBotao.addEventListener("click", () => {
        if (usuarioIniciante) {
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
        alert("Teste finalizado! Obrigado por participar.");
    });
});
