const dadContent = document.body;
const estado = document.querySelector('#input-estado');

let estados = [
    'Amapá',
    'Rio de Janeiro',
    'São Paulo',
    'Espirito Santo',
    'Bahia',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Sergipe',
    'Pernambuco',
    'Alagoas',
    'Maranhão',
    'Ceará',
    'Tocantins',
    'Minas Gerais',
    'Distrito-Federal',
    'Goias',
		'Pará',
		'Amazonas',
		'Roraima',
		'Rondônia',
		'Acre',
		'Mato Grosso',
		'Mato Grosso do Sul',
		'Paraná',
		'Santa Catarina',
		'Paraíba',
		'Piauí'
];

for (i = 0; i < estados.length; i++) {
  addOption( estados[i] );
}

function addOption (valor) {
  let option = new Option(valor, valor);
	estado.add(option);
}
