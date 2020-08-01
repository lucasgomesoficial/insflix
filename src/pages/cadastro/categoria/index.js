/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };

  const { values, HandlerChange, ClearForm } = useForm(initialValue);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://insflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (requestServer) => {
        const resquest = await requestServer.json();
        setCategorias([
          ...resquest,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:&nbsp;
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(Event) {
        Event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        ClearForm();
      }}
      >

        <FormField
          label="Categoria"
          name="name"
          value={values.name}
          onChange={HandlerChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={HandlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={HandlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
