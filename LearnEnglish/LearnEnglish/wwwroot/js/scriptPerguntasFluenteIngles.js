document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }
    let quantidadeRespostasCertasFluente = 0;

    const botaoFluente = document.getElementById("botaoInglesFluente");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const vamosBotao = document.getElementById("VamosBotao");
    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");

    let usuarioFluente = false;

    const PrimeiraPergunta = document.getElementById("PrimeiraPerguntaFluente");
    const SegundaPergunta = document.getElementById("SegundaPerguntaFluente");
    const TerceiraPergunta = document.getElementById("TerceiraPerguntaFluente");
    const QuartaPergunta = document.getElementById("QuartaPerguntaFluente");
    const QuintaPergunta = document.getElementById("QuintaPerguntaFluente");

    const avancar1 = document.getElementById("avancarPrimeiraFluente");
    const avancar2 = document.getElementById("avancarSegundaFluente");
    const avancar3 = document.getElementById("avancarTerceiraFluente");
    const avancar4 = document.getElementById("avancarQuartaFluente");
    const avancar5 = document.getElementById("avancarQuintaFluente");

    botaoFluente.addEventListener("click", () => {
        usuarioFluente = true;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });
    vamosBotao.addEventListener("click", () => {
        if (usuarioFluente) {
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
        alert(`Você acertou: ${quantidadeRespostasCertasFluente} questões`);

    });
    document.getElementById("PrimeiraRespostaFluente").addEventListener("click", () => {
        quantidadeRespostasCertasFluente += 1;
    });
    document.getElementById("SegundaRespostaFluente").addEventListener("click", () => {
        quantidadeRespostasCertasFluente += 1;
    });
    document.getElementById("TerceiraRespostaFluente").addEventListener("click", () => {
        quantidadeRespostasCertasFluente += 1;
    });
    document.getElementById("QuartaRespostaFluente").addEventListener("click", () => {
        quantidadeRespostasCertasFluente += 1;
    });
    document.getElementById("QuintaRespostaFluente").addEventListener("click", () => {
        quantidadeRespostasCertasFluente += 1;
    });
});

    
