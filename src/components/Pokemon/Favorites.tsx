import React from "react";

import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
	pokemons: number[];
}

export const Favorites: React.FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} justify="flex-start" direction="row">
			{pokemons.map((id) => (
				<FavoriteCardPokemon key={id} pokemonId={id} />
			))}
		</Grid.Container>
	);
};
