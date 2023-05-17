import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});





// Se exporta despues de todo porque a veces hay middlewares que se ejecutan antes de exportar
export default pokeApi;