document.addEventListener("DOMContentLoaded", function () {
    const nome = localStorage.getItem("nomeUsuario");
    if (nome) {
        const titulo = document.getElementById("BemVindoX");
        if (titulo) {
            titulo.textContent = `Bem-vindo, ${nome}!`;
        }
    }
    let quantidadeRespostasCertasAmador = 0;

    const botaoAmador = document.getElementById("botaoInglesAmador");
    const TesteRapidoBotoes = document.getElementById("TesteRapido");
    const vamosBotao = document.getElementById("VamosBotao");
    const PrimeirosBotoes = document.getElementById("PrimeirosBotoes");
    const BotoesRestantes = document.getElementById("BotoesRestantes");
    let usuarioAmador = false;
    const PrimeiraPergunta = document.getElementById("PrimeiraPerguntaAmador");
    const SegundaPergunta = document.getElementById("SegundaPerguntaAmador");
    const TerceiraPergunta = document.getElementById("TerceiraPerguntaAmador");
    const QuartaPergunta = document.getElementById("QuartaPerguntaAmador");
    const QuintaPergunta = document.getElementById("QuintaPerguntaAmador");

    const avancar1 = document.getElementById("avancarPrimeiraPerguntaAmador");
    const avancar2 = document.getElementById("avancarSegundaPerguntaAmador");
    const avancar3 = document.getElementById("avancarTerceiraPerguntaAmador");
    const avancar4 = document.getElementById("avancarQuartaPerguntaAmador");
    const avancar5 = document.getElementById("avancarQuintaPerguntaAmador");

    botaoAmador.addEventListener("click", () => {
        usuarioAmador = true;
        PrimeirosBotoes.style.display = "none";
        BotoesRestantes.style.display = "none";
        TesteRapidoBotoes.style.display = "block";
    });
    vamosBotao.addEventListener("click", () => {
        if (usuarioAmador) {
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
        alert(`Você acertou: ${quantidadeRespostasCertasAmador} questões`);
    });
    document.getElementById("PrimeiraRespostaAmador").addEventListener("click", () => {
        quantidadeRespostasCertasAmador += 1;
    });
    document.getElementById("SegundaRespostaAmador").addEventListener("click", () => {
        quantidadeRespostasCertasAmador += 1;
    });
    document.getElementById("TerceiraRespostaAmador").addEventListener("click", () => {
        quantidadeRespostasCertasAmador += 1;
    });
    document.getElementById("QuartaRespostaAmador").addEventListener("click", () => {
        quantidadeRespostasCertasAmador += 1;
    });
    document.getElementById("QuintaRespostaAmador").addEventListener("click", () => {
        quantidadeRespostasCertasAmador += 1;
        
    })
});