import { groupFilePaths } from "./groupFilePaths.js";
import { readFileUTF8 } from "./readFileUTF8.js";

export const getGroupedFiles = () =>
	groupFilePaths().then(filePairs =>
		Promise.all(
			filePairs.map(
				([readmeFilePath, packageFilePath, typeDocFilePaths]) =>
					Promise.all([
						readFileUTF8(readmeFilePath),
						readFileUTF8(packageFilePath).then(
							({ content }) =>
								/** @type {import("../package.json")} */ (
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									JSON.parse(content)
								),
						),
						Promise.all(
							/** @type {[index: ReturnType<typeof readFileUTF8>, ...modules: ReadonlyArray<ReturnType<typeof readFileUTF8>>]} */ (
								typeDocFilePaths.map(readFileUTF8)
							),
						),
					]),
			),
		),
	);
