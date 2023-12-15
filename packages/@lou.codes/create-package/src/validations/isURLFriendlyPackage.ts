import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_OBJECT, EMPTY_STRING } from "@lou.codes/constants";
import { isURLFriendly } from "./isURLFriendly.js";

export const isURLFriendlyPackage = (packageName: string) => {
	const {
		groups: {
			namespace = EMPTY_STRING,
			namespacedPackageName = EMPTY_STRING,
		} = EMPTY_OBJECT as {
			namespace?: string;
			namespacedPackageName?: string;
		},
	} =
		packageName.match(
			/^(?:@(?<namespace>[^/]+?)[/])?(?<namespacedPackageName>[^/]+?)$/u,
		) ?? (EMPTY_OBJECT as Partial<RegExpMatchArray>);

	return (
			(
				namespace !== EMPTY_STRING &&
				namespacedPackageName !== EMPTY_STRING
			) ?
				[namespace, namespacedPackageName].every(isURLFriendly)
			:	isURLFriendly(packageName)
		) ?
			EMPTY_STRING
		:	foregroundRed`"${packageName}" isn't URL friendly`;
};
