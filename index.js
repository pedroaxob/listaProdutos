import express from 'express';

import {
  listarPorCategoria,
  calcularValorTotalEstoque,
  buscarPorId,
  buscarPorNome,
  listarItensComBaixaQuantidade,
  listarTop5ItensMaiorValor,
  itemMaiorValorEmEstoque // Corrigido para usar o nome correto
} from './bd/servicos.js';

const app = express();

app.get('/', (req, res) => {
  res.send('API de Produtos');
});

// Listar produtos por categoria
app.get('/produtosCategoria/:categoria', (req, res) => {
  const { categoria } = req.params;
  const produtosFiltrados = listarPorCategoria(categoria);
  res.json(produtosFiltrados);
});

// Calcular o valor total em estoque
app.get('/valorTotalEstoque', (req, res) => {
  const valorTotal = calcularValorTotalEstoque();
  res.json({ valorTotal });
});

// Buscar produto por ID
app.get('/produto/:id', (req, res) => {
  const { id } = req.params;
  const produto = buscarPorId(Number(id));
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ error: 'Produto não encontrado' });
  }
});

// Buscar produtos pelo nome
app.get('/produtosNome/:nome', (req, res) => {
  const { nome } = req.params;
  const produtos = buscarPorNome(nome);
  res.json(produtos);
});

// Listar itens com baixa quantidade
app.get('/itensBaixaQuantidade', (req, res) => {
  const itens = listarItensComBaixaQuantidade();
  res.json(itens);
});

// Listar os 5 itens com maior valor em estoque
app.get('/top5ItensMaiorValor', (req, res) => {
  const top5Itens = listarTop5ItensMaiorValor();
  res.json(top5Itens);
});

// Identificar o item com maior valor em estoque
app.get('/itemMaiorValor', (req, res) => {
  const itemMaior = itemMaiorValorEmEstoque();
  res.json(itemMaior);
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});