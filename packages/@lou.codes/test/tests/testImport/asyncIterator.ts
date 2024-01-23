export const asyncIterator = async function* () {
	yield await Promise.resolve("test" as const);
};
