import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValue);


  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function HandlerChange(Event) {
    // const { getAttribute, value } = Event.target;
    setValue(
      Event.target.getAttribute('name'),
      Event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(Event) {
        Event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(initialValue)
      }}>
        
        <FormField
          label="Categoria"
          type="text"
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
        
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={HandlerChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={HandlerChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.name}
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