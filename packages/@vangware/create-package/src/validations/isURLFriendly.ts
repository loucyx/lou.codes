export const isURLFriendly = (value: string) =>
	encodeURIComponent(value) === value;
