import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (requestServer) => {
      if (requestServer.ok) {
        const resquest = await requestServer.json();

        return resquest;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (requestServer) => {
      if (requestServer.ok) {
        const resquest = await requestServer.json();

        return resquest;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
