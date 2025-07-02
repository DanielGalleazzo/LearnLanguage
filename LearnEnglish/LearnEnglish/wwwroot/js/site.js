document.addEventListener("DOMContentLoaded", function () {
    const botaoSim = document.getElementById("botaoInterfaceSim");
    const botaoNao = document.getElementById("botaoInterfaceNao");
    const botaoEnviar = document.getElementById("botaoEnviar");

    const containerNome = document.getElementById("containerNome");
    const containerIdioma = document.getElementById("containerIdioma");
    const containerNao = document.getElementById("containerNao");

 

    botaoSim.addEventListener("click", function () {
        botaoEnviar.style.display = "block";

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
    });

    botaoNao.addEventListener("click", function () {
        if (!containerNao.querySelector("textarea")) {
            const textNao = document.createElement("textarea");
            textNao.rows = 1;
            textNao.cols = 50;
            textNao.placeholder = "Qual motivo você não quer começar?";
            containerNao.appendChild(textNao);
        }

        containerNome.innerHTML = "";
        containerIdioma.innerHTML = "";
        botaoEnviar.style.display = "none";
    });

    botaoEnviar.addEventListener("click", function () {
        const nome = document.getElementById("nomeInput")?.value;
        const idioma = document.getElementById("idiomaInput")?.value;

        if (!nome || !idioma) {
            alert("Por favor, preencha o nome e o idioma.");
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
});
