import { SmallPokemon } from "@/interfaces";
import { Card, Row, Text, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, image, name } }) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/pokemon/${id}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={id}>
			<Card isPressable isHoverable onClick={onClick}>
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
	);
};
