document.addEventListener("DOMContentLoaded", function () {
    const botaoInterfaceSim = document.getElementById("botaoInterfaceSim");
    const botaoInterfaceNao = document.getElementById("botaoInterfaceNao");
    const botaoEnviar = document.getElementById("botaoEnviar");
    const botaoEnviarNao = document.getElementById("botaoEnviarNao");

    const containerNome = document.getElementById("containerNome");
    const containerIdioma = document.getElementById("containerIdioma");
    const containerNao = document.getElementById("containerNao");
    const MotivoNaoComecar = document.getElementById("MotivoNaoComecar");

    botaoEnviar.style.display = "none";
    botaoEnviarNao.style.display = "none";

    botaoInterfaceSim.addEventListener("click", function () {
        const divNao = document.getElementById("divNao");
        divNao.style.display = "none";

        if (!containerNome.querySelector("textarea")) {
            const textNome = document.createElement("textarea");
            textNome.rows = 1;
            textNome.cols = 50;
            textNome.placeholder = "Qual é o seu nome?";
            textNome.id = "nomeInput";
            containerNome.appendChild(textNome);
        }

        if (!containerIdioma.querySelector("select")) {
            const textIdioma = document.createElement("select");
            textIdioma.id = "idiomaInput";

            const opcoes = ["ingles", "frances", "espanhol"];
            const nomes = ["Inglês", "Francês", "Espanhol"];

            opcoes.forEach((valor, index) => {
                const option = document.createElement("option");
                option.value = valor;
                option.text = nomes[index];
                textIdioma.appendChild(option);
            });

            containerIdioma.appendChild(textIdioma);
        }

        containerNao.innerHTML = "";
        MotivoNaoComecar.innerHTML = "";
        botaoEnviar.style.display = "block";
        botaoEnviarNao.style.display = "none";
    });

    botaoInterfaceNao.addEventListener("click", function () {
        const divSim = document.getElementById("divSim");
        divSim.style.display = "none";

        if (!containerNao.querySelector("textarea")) {
            const textNomeNao = document.createElement("textarea");
            textNomeNao.rows = 1;
            textNomeNao.cols = 50;
            textNomeNao.placeholder = "Qual o seu nome?";
            textNomeNao.id = "nomeNaoInput";
            containerNao.appendChild(textNomeNao);
        }

        if (!MotivoNaoComecar.querySelector("select")) {
            const textMotivo = document.createElement("select");
            textMotivo.id = "motivoInput";

            const opcoesNaoComecar = ["Não tenho tempo", "Não é para mim", "Não vejo necessidade", "Outro"];
            const nomesNaoComecar = ["Não tenho tempo", "Não é para mim", "Não vejo necessidade", "Outro"];

            opcoesNaoComecar.forEach((valor, index) => {
                const optionNao = document.createElement("option");
                optionNao.value = valor;
                optionNao.text = nomesNaoComecar[index];
                textMotivo.appendChild(optionNao);
            });

            MotivoNaoComecar.appendChild(textMotivo);
        }

        containerNome.innerHTML = "";
        containerIdioma.innerHTML = "";
        botaoEnviar.style.display = "none";
        botaoEnviarNao.style.display = "block";
    });

    botaoEnviar.addEventListener("click", function () {
        const nome = document.getElementById("nomeInput")?.value;
        const idioma = document.getElementById("idiomaInput")?.value;

        if (!nome || !idioma) {
            alert("Por favor, preencha o nome e o idioma para podermos avançar.");
            return;
        }

        localStorage.setItem("nomeUsuario", nome);

        fetch("/UsuarioIdioma/Create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, idioma })
        })
            .then(response => {
                if (response.ok) {
                    window.open("/Html/Ingles", "_blank");
                } else {
                    alert("Erro ao enviar os dados.");
                }
            })
            .catch(error => {
                console.error("Erro:", error);
                alert("Erro na requisição.");
            });
    });

    botaoEnviarNao.addEventListener("click", function () {
        const nomeNao = document.getElementById("nomeNaoInput")?.value;
        const motivo = document.getElementById("motivoInput")?.value;

        if (!nomeNao || !motivo) {
            alert("Por favor, preencha o nome e o motivo para continuarmos.");
            return;
        }

        localStorage.setItem("nomeUsuario", nomeNao);

        fetch("/UsuarioMotivo/Create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Nome: nomeNao, Motivo: motivo })
        })
            .catch(error => {
                console.error("Erro:", error);
                alert("Erro na requisição.");
            });
    });
});
