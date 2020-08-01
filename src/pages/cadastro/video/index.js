import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { HandlerChange, values } = useForm({
    // title: 'BLUES NA  EM NY.',
    // url: 'https://www.youtube.com/watch?v=jOUIQ3siUPY',
    // categoria: 'MADEIRA',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaPick = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaPick.id,
        })
          .then(() => {
            console.log('Cadastrado!');
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={HandlerChange}
        />

        <FormField
          label="Link do Vídeo"
          name="url"
          value={values.url}
          onChange={HandlerChange}
        />

        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={HandlerChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
