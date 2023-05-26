import { Image, Spacer, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";

export const Navbar = () => {
	const router = useRouter();
	const { theme } = useTheme();
	const onClick = () => {
		router.push("/");
	};
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
      
			<Text color="white" h2>
				P
			</Text>
			<Text color="white" h3>
				okémon
			</Text>
			<Spacer css={{ flex: 1 }} />
			<Text color="white" h5>
				Guillermo Cardona
			</Text>
		</div>
	);
};
