import { useEffect, useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";

import { Pokemon, PokemonListResponse } from "@/interfaces";
import { localFavorites } from "@/utils";

interface Props {
	pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorites, setIsInFavorites] = useState(false);

	useEffect(() => {
		setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
	}, [pokemon.id]);

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);
		if (isInFavorites) return;

		confetti({
			particleCount: 100,
			spread: 70,
			zIndex: 999,
			angle: -150,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									"/no-image.png"
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Header
							css={{ display: "flex", justifyContent: "space-between" }}
						>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button
								color={"gradient"}
								ghost={!isInFavorites}
								onPress={onToggleFavorite}
							>
								{isInFavorites ? "Remove from favorites" : "Add to favorites"}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image
									src={pokemon.sprites.front_default || "/no-image.png"}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default || "/no-image.png"}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny || "/no-image.png"}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny || "/no-image.png"}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	// first we get the names of all pokemons
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	// then we create an array of paths with the params
	const paths = data.results.map((pokemon) => ({
		params: { name: pokemon.name },
	})); 

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/` + name);

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPageByName;
