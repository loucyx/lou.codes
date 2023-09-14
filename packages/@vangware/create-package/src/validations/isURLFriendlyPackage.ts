import { foregroundRed } from "@vangware/ansi";
import { isURLFriendly } from "./isURLFriendly.js";

export const isURLFriendlyPackage = (packageName: string) => {
	const { groups: { namespace = "", namespacedPackageName = "" } = {} } =
		packageName.match(
			/^(?:@(?<namespace>[^/]+?)[/])?(?<namespacedPackageName>[^/]+?)$/u,
		) ?? ({} as Partial<RegExpMatchArray>);

	return (
		namespace !== "" && namespacedPackageName !== ""
			? [namespace, namespacedPackageName].every(isURLFriendly)
			: isURLFriendly(packageName)
	)
		? ""
		: foregroundRed`"${packageName}" isn't URL friendly`;
};
