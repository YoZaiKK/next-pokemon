import Head from "next/head";
import { FC, ReactNode } from "react";
interface Props {
	children: ReactNode;
	title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title ? title : "Pokemon App"}</title>
				<meta name="author" content="Guillermo Cardona" />
				<meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
				<meta name="keywords" content={`${ title }, pokemon, pokedex`} />
			</Head>

			{/* Navbar */}

			<main>{children}</main>
		</>
	);
};