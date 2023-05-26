import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Layout } from "@/components/layouts";
import { useRouter } from "next/router";

interface Props {
	id: string;
	name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
	const router = useRouter();
	console.log(router.query);
	return (
		<Layout title="Some pokemon">
			{id} - {name}{" "}
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	return {
		paths: [
			{
				params: {id: "1",}, 
			},
      {
        params: {id: "2",},
      }
      {
        params: {id: "3",},
      }
		],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	// const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	return {
		props: {
			id: "1",
			name: "bulbasaur",
		},
	};
};

export default PokemonPage;
