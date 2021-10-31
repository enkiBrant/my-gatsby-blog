module.exports = {
	plugins: [
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`,
			},
		},
	],
};
