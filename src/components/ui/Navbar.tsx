import { useRouter } from "next/router";
import NextLink from "next/link";
import { Image, Link, Spacer, Text, useTheme } from "@nextui-org/react";

export const Navbar = () => {
	const router = useRouter();
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 20px",
				backgroundColor: theme?.colors.background.value,
			}}
		>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
				width={50}
				height={50}
				alt="icono de la app"
			/>
			<NextLink href={"/"} passHref>
				<Link>
					<Text color="white" h2>
						P
					</Text>
					<Text color="white" h3>
						okémon
					</Text>
				</Link>
			</NextLink>
			<Spacer css={{ flex: 1 }} />
			<NextLink href={"/favorites"} passHref>
				<Link>
					<Text color="white" h5>
						Favoritos
					</Text>
				</Link>
			</NextLink>
		</div>
	);
};
