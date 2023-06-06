import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (pokemon: string) => {

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/` + pokemon);
	
	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};
}