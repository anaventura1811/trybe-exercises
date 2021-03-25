
const states = document.getElementById('state');

function addStateOptions() {
  const stateOptions = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  for (let key = 0; key < Object.keys(stateOptions).length; key += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).textContent = stateOptions[key];
    states.appendChild(createOptions).value = stateOptions[key];
  }
}
console.log(addStateOptions());
window.onload = function initialize () {
   addStateOptions();
}

/* Data de início - Texto
Verificar o formato da data dd/mm/aaaa .
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.
Campo obrigatório
Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() .
Execute as validações que foram pedidas ao longo da montagem do formulário.
Monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também. */
