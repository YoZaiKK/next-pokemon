import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	console.log(pokemon);
	return (
		<Layout title="Some pokemon">
			<h1>{pokemon.name}</h1>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const paths = [...Array(151)].map((value, index) => ({
		params: { id: `${index + 1}` },
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/` + id);

	return {
		props: {
			pokemon: data
		},
	};
};

export default PokemonPage;
