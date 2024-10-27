// Captura o campo de busca e a lista de agentes
const searchInput = document.getElementById('searchInput');
const agents = document.querySelectorAll('.agent');

// Adiciona um evento de "input" para capturar o que o usuário digita
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // Termo buscado, transformado em minúsculas

    // Itera sobre todos os agentes
    agents.forEach(agent => {
        const agentName = agent.querySelector('h2').textContent.toLowerCase(); // Nome do agente
        const agentType = agent.querySelector('span').textContent.toLowerCase(); // Tipo do agente (Duelista, Controlador, etc.)

        // Verifica se o termo buscado está no nome ou no tipo do agente
        if (agentName.includes(searchTerm) || agentType.includes(searchTerm)) {
            agent.style.display = ''; // Exibe o agente
        } else {
            agent.style.display = 'none'; // Esconde o agente
        }
    });
});


//Cor de fundo do menu

var menuItem = document.querySelectorAll('.item')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)