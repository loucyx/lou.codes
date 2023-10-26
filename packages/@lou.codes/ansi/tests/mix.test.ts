import { format } from "../src/format.js";
import { mix } from "../src/mix.js";
import { test } from "./test.js";

const first = format(13)(13);
const second = format(42)(42);
const mixed = mix(first, second);

export default test(import.meta.url)(
	{
		given: "an string and a mix of 2 functions",
		must: "return that string surrounded by the expected values",
		received: () => mixed("foobar"),
		wanted: () => second(first("foobar")),
	},
	{
		given: "an template literal and a mix of 2 functions",
		must: "return that template literal surrounded by the expected values",
		received: () => mixed`foobar ${10}`,
		wanted: () => second`${first`foobar ${10}`}`,
	},
);
