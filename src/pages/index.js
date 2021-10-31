import { useSiteMetadata } from "../hooks/use-site-metadata";
import React from "react";

export default function IndexPage() {
	const { title, description } = useSiteMetadata();
	return (
		<>
			<h1>title</h1>
			<p>{description}</p>
		</>
	);
}
