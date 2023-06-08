import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";
interface Props {
	children: ReactNode;
	title?: string;
}

const origin = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
	console.log({origin});
	return (
		<>
			<Head>
				<title>{title ? title : "Pokemon App"}</title>
				<meta name="author" content="Guillermo Cardona" />
				<meta
					name="description"
					content={`Informacion sobre el pokemon ${title}`}
				/>
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
				<meta
					property="og:title"
					content={`Informacion sobre ${ title }`}
				/>
				<meta
					property="og:description"
					content={`Informacion sobre el pokemon ${title}`}
				/>
				<meta
					property="og:image"
					content={`${origin}/img/banner.png`}
				/>
			</Head>

			{/* Navbar */}
			<Navbar />

			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
