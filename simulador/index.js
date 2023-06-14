const pilha = [];
const pilhaElemento = document.getElementById("pilha");

function inserirNumeroAleatorioPilha() {
  const numero = Math.floor(Math.random() * 100);
  pilha.push(numero);
  atualizarPilha();
}

function inserirDezNumerosAleatoriosPilha() {
  for (let i = 0; i < 10; i++) {
    const numero = Math.floor(Math.random() * 100);
    pilha.push(numero);
  }
  atualizarPilha();
}

function removerUltimo() {
  pilha.pop();
  atualizarPilha();
}

function removerDezNumerosAleatoriosPilha() {
  for (let i = 0; i < 10; i++) {
    pilha.pop();
  }
  atualizarPilha();
}

function removerTodos() {
  while (pilha.length > 0) {
    pilha.pop();
  }
  atualizarPilha();
}

function atualizarPilha() {
  pilhaElemento.innerHTML = pilha.join(", ");
}

const fila = [];
const filaElemento = document.getElementById("fila");

function inserirNumeroAleatorioFila() {
  const numero = Math.floor(Math.random() * 100);
  fila.push(numero);
  atualizarFila();
}

function inserirDezNumerosAleatoriosFila() {
  for (let i = 0; i < 10; i++) {
    inserirNumeroAleatorioFila();
  }
}

function removerPrimeiroDaFila() {
  fila.shift();
  atualizarFila();
}

function removerPrimeirosDez() {
  fila.splice(0, 10);
  atualizarFila();
}

function removerTudoDaFila() {
  while (fila.length > 0) {
    fila.pop();
  }
  atualizarFila();
}

function atualizarFila() {
  filaElemento.innerHTML = fila.join(", ");
}
var lista = [];

function inserirNumeroAleatorioLista() {
  var numero = Math.floor(Math.random() * 100) + 1;
  lista.push(numero);
  exibirLista();
}

function inserirDezNumerosAleatoriosLista() {
  for (var i = 0; i < 10; i++) {
    var numero = Math.floor(Math.random() * 100) + 1;
    lista.push(numero);
  }
  exibirLista();
}

function removerUltimoDaLista() {
  if (lista.length > 0) {
    lista.pop();
    exibirLista();
  }
}
function removerDezNumerosAleatoriosLista() {
  if (lista.length >= 10) {
    for (var i = 0; i < 10; i++) {
      var indiceAleatorio = Math.floor(Math.random() * lista.length);
      lista.splice(indiceAleatorio, 1);
    }
    exibirLista();
  }
}
function removerTodosDaLista() {
  lista = [];
  exibirLista();
}
function exibirLista() {
  var listaElement = document.getElementById("lista");
  listaElement.innerHTML = "";
  for (var i = 0; i < lista.length; i++) {
    var item = document.createElement("div");
    item.textContent = lista[i];
    listaElement.appendChild(item);
  }
}
// Estrutura de dados para a árvore
class No {
  constructor(valor) {
    this.valor = valor;
    this.filhos = [];
  }
}

var raiz = null;

function adicionarNo() {
  var valor = prompt("Digite o valor do nó:");
  if (valor !== null && valor.trim() !== "") {
    var novoNo = new No(valor);
    if (raiz === null) {
      raiz = novoNo;
    } else {
      var noSelecionado = prompt("Digite o valor do nó pai:");
      if (noSelecionado !== null && noSelecionado.trim() !== "") {
        var noPai = buscarNo(raiz, noSelecionado);
        if (noPai !== null) {
          noPai.filhos.push(novoNo);
        } else {
          alert("Nó pai não encontrado!");
        }
      }
    }
    exibirArvore();
  }
}

function removerNo() {
  var valor = prompt("Digite o valor do nó a ser removido:");
  if (valor !== null && valor.trim() !== "") {
    if (raiz !== null && raiz.valor === valor) {
      raiz = null;
    } else {
      removerNoRecursivo(raiz, valor);
    }
    exibirArvore();
  }
}

function removerNoRecursivo(no, valor) {
  for (var i = 0; i < no.filhos.length; i++) {
    if (no.filhos[i].valor === valor) {
      no.filhos.splice(i, 1);
      return;
    }
    removerNoRecursivo(no.filhos[i], valor);
  }
}

function buscarNo(no, valor) {
  if (no.valor === valor) {
    return no;
  }
  for (var i = 0; i < no.filhos.length; i++) {
    var resultado = buscarNo(no.filhos[i], valor);
    if (resultado !== null) {
      return resultado;
    }
  }
  return null;
}

function exibirArvore() {
  var arvoreElemento = document.getElementById("arvore");
  arvoreElemento.innerHTML = "";
  if (raiz !== null) {
    exibirNo(raiz, arvoreElemento);
  }
}

function exibirNo(no, elementoPai) {
  var noElemento = document.createElement("div");
  noElemento.classList.add("arvore-no");

  var valorElemento = document.createElement("div");
  valorElemento.classList.add("arvore-valor");
  valorElemento.textContent = no.valor;

  noElemento.appendChild(valorElemento);

  var filhosElemento = document.createElement("div");
  filhosElemento.classList.add("arvore-filhos");
  for (var i = 0; i < no.filhos.length; i++) {
    exibirNo(no.filhos[i], filhosElemento);
  }

  noElemento.appendChild(filhosElemento);

  elementoPai.appendChild(noElemento);
}

exibirArvore();

