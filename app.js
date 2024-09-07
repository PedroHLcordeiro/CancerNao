function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o assunto de interesse!</p>";
        return; // Interrompe a execução da função
    }

    // Transforma o valor da pesquisa em minúsculas para comparações case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Loop que percorre cada objeto no array "dados"
    for (let dado of dados) {
        // Verifica se o dado possui as propriedades título, descrição e tags
        titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
        descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        tags = dado.tags ? dado.tags.toLowerCase() : "";

        // Verifica se o campo de pesquisa está contido no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h3><a href="${dado.link}" target="_blank">${dado.titulo}</a></h3>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se resultados não contiver nada, exibe mensagem de "nenhum resultado"
    if (!resultados) {
        section.innerHTML = "<p>Nenhum resultado foi encontrado para sua pesquisa.</p>";
    } else {
        section.innerHTML = resultados;
    }
}
