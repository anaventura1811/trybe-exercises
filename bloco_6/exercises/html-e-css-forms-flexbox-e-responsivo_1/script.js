
const states = document.getElementById('state');
let stateOptions = {
    
}
function addStateOptions() {
  const stateOptions = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  for (let key = 0; key < stateOptions.length; key += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).textContent = stateOptions[key];
    states.appendChild(createOptions).value = stateOptions[key];
  }
}
window.onload = function initialize () {
   addStateOptions();
}