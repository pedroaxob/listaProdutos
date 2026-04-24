import { produtos } from './bd.js';

function listarPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
}

function calcularValorTotalEstoque() {
  return produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
}

function buscarPorId(id) {
  return produtos.find(produto => produto.id === id);
}

function buscarPorNome(nome) {
  return produtos.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()));
}

function listarItensComBaixaQuantidade() {
  return produtos.filter(produto => produto.quantidade < 10);
}

function listarTop5ItensMaiorValor() {
  return produtos
    .map(produto => ({ ...produto, valorEstoque: produto.preco * produto.quantidade }))
    .sort((a, b) => b.valorEstoque - a.valorEstoque)
    .slice(0, 5);
}


function itemMaiorValorEmEstoque() {
  return produtos.reduce((maior, produto) => {
    const valorEstoqueAtual = produto.preco * produto.quantidade;
    const valorEstoqueMaior = maior.preco * maior.quantidade;
    return valorEstoqueAtual > valorEstoqueMaior ? produto : maior;
  });
}

export {
  listarPorCategoria,
  calcularValorTotalEstoque,
  buscarPorId,
  buscarPorNome,
  listarItensComBaixaQuantidade,
  listarTop5ItensMaiorValor,
  itemMaiorValorEmEstoque
};