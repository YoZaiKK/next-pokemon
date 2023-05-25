import { GetStaticProps, NextPage } from "next";

import { Layout } from "../components/layouts/";
import { SmallPokemon } from "../interfaces/pokemon-list";

import { PokemonListResponse } from "@/interfaces";
import { pokeApi } from "@/api";
import { Card, Col, Grid, Row, Text } from "@nextui-org/react";

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title="Listado de pokemons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map(({ id, name, image }) => (
					<Grid xs={6} sm={3} md={2} xl={1} key={id}>
						<Card isPressable isHoverable>
							<Card.Body>
								<Card.Image src={image} width="100%" height={140} />
							</Card.Body>
							<Card.Footer
								isBlurred
								css={{
									position: "absolute",
									bgBlur: "#0f111466",
									borderTop: "$borderWeights$light solid $gray800",
									bottom: 0,
									zIndex: 1,
								}}
							>
								<Row justify="space-between">
									<Text transform="capitalize">{name}</Text>
									<Text>#{id}</Text>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>
				))}
			</Grid.Container>
		</Layout>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await  // your fetch function here
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
	// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

	// agregando la imagen de cada poquemon a un nuevo array
	const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
		const id = index + 1;
		const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
		return {
			...pokemon,
			id,
			image,
		};
	});
	console.log(data);
	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
