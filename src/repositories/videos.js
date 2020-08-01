import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}videos`;

function create(objectVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
  })
    .then(async (requestServer) => {
      if (requestServer.ok) {
        const resquest = await requestServer.json();

        return resquest;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
};
