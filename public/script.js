// CATÁLOGO DE FILMES/SÉRIES

const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9.5,
    assistido: true
  },

  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.7,
    assistido: true
  },

  {
    id: 3,
    titulo: "Round 6",
    tipo: "serie",
    ano: 2021,
    generos: ["suspense"],
    nota: 8.5,
    assistido: false
  },

  {
    id: 4,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação", "aventura"],
    nota: 8.9,
    assistido: true
  },

  {
    id: 5,
    titulo: "The Last of Us",
    tipo: "serie",
    ano: 2023,
    generos: ["drama", "ação"],
    nota: 9.1,
    assistido: false
  },

  {
    id: 6,
    titulo: "Toy Story",
    tipo: "filme",
    ano: 1995,
    generos: ["animação", "aventura"],
    nota: 8.3,
    assistido: true
  }
];


// MOSTRANDO O CATÁLOGO

console.log("Catálogo completo:");
console.log(catalogo);


// primeiro título

console.log("Primeiro item:");
console.log(catalogo[0].titulo);


// ano do último item

console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);


// segundo gênero do terceiro item

console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos.length > 1) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("Esse item só possui um gênero.");
}

// FOREACH

console.log("Lista de títulos:");

catalogo.forEach(function(item) {
  console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});


// MAP

const titulosEmCaixaAlta = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});

console.log("Títulos em maiúsculo:");
console.log(titulosEmCaixaAlta);


// FILTER

const naoAssistidos = catalogo.filter(function(item) {
  return item.assistido === false;
});

console.log("Quantidade de não assistidos:");
console.log(naoAssistidos.length);


// FIND

const notaAlta = catalogo.find(function(item) {
  return item.nota >= 9;
});

if (notaAlta) {
  console.log("Primeiro item com nota maior ou igual a 9:");
  console.log(notaAlta.titulo + " - Nota: " + notaAlta.nota);
} else {
  console.log("Nenhum item encontrado.");
}


// REDUCE

const somaNotas = catalogo.reduce(function(total, item) {
  return total + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

console.log("Média geral:");
console.log(mediaGeral.toFixed(2));


// média dos assistidos

const assistidos = catalogo.filter(function(item) {
  return item.assistido === true;
});

const somaAssistidos = assistidos.reduce(function(total, item) {
  return total + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média dos assistidos:");
console.log(mediaAssistidos.toFixed(2));

// SOME E EVERY

const itemAntigo = catalogo.some(function(item) {
  return item.ano < 2000;
});

console.log("Existe item antes dos anos 2000?");
console.log(itemAntigo);


const todosTemGenero = catalogo.every(function(item) {
  return item.generos.length > 0;
});

console.log("Todos possuem gênero?");
console.log(todosTemGenero);


// PARTE DA DIV

const filmes = catalogo.filter(function(item) {
  return item.tipo === "filme";
});

const series = catalogo.filter(function(item) {
  return item.tipo === "serie";
});


// ranking simples

const copiaCatalogo = [...catalogo];

copiaCatalogo.sort(function(a, b) {
  return b.nota - a.nota;
});

const ranking = copiaCatalogo.slice(0, 3);


// criando lista do ranking

let listaRanking = "";

ranking.forEach(function(item) {
  listaRanking += "<li>" + item.titulo + " - Nota " + item.nota + "</li>";
});


// mostrando na tela

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>

  <p>Total de itens: ${catalogo.length}</p>

  <p>Quantidade de filmes: ${filmes.length}</p>

  <p>Quantidade de séries: ${series.length}</p>

  <p>Não assistidos: ${naoAssistidos.length}</p>

  <p>Média geral: ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 maiores notas</h3>

  <ol>
    ${listaRanking}
  </ol>
`;