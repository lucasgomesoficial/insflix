/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function HandlerChange(Event) {
    // const { getAttribute, value } = Event.target;
    setValue(
      Event.target.getAttribute('name'),
      Event.target.value,
    );
  }

  useEffect(() => {
    console.log('Aeeeeeeeeeeeeeeeeees');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (requestServer) => {
        const resquest = await requestServer.json();
        setCategorias([
          ...resquest,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       name: 'Bass',
    //       description: 'EPIC Bass',
    //       color: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       name: 'Bass Again',
    //       description: 'EPIC Bass Monster',
    //       color: '#cbd1ff',
    //     },
    //   ]);
    // }, 3 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(Event) {
        Event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(initialValue);
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
          <li key={`${categoria.nome}`}>
            {categoria.name}
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
