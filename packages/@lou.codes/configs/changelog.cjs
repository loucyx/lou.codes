/**
 * Changesets custom changelog functions.
 * @see [Changeset documentation](https://github.com/changesets/changesets/blob/main/docs/modifying-changelog-format.md)
 */
// eslint-disable-next-line functional/immutable-data
module.exports = Object.freeze(
	/** @type {const} @satisfies {import("@changesets/types").ChangelogFunctions} */ ({
		getDependencyReleaseLine: (_changesets, dependenciesUpdated) =>
			Promise.resolve(
				dependenciesUpdated.length === 0 ?
					""
				:	dependenciesUpdated
						.map(
							({ name, newVersion }) =>
								`-   ⬆️ upgrade \`${name}\` to \`v${newVersion}\`.`,
						)
						.join("\n"),
			),
		getReleaseLine: ({ summary }) =>
			Promise.resolve(
				summary
					.split("\n")
					.map(line =>
						line.startsWith("-") || line.startsWith("    ") ?
							line
						:	`-   ${line}`,
					)
					.join("\n"),
			),
	}),
);
