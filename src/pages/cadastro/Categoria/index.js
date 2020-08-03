import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#ff0000'
  }
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);
      }}>

        <div>
          <label>
            Nome da Categoria:
          <input
              type="text"
              value={valores.nome}
              name="nome"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
          <textarea
              type="text"
              value={valores.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
          <input
              type="color"
              value={valores.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={indice}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;