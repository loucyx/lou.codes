import type { Test } from "@lou.codes/test";
import { constructDataView } from "../src/constructDataView.js";

export const constructDataViewTest = {
	given: "a constructDataView",
	must: "return new instance of DataView",
	received: () => constructDataView(new ArrayBuffer(0)).constructor.name,
	wanted: () => "DataView",
} satisfies Test<string>;
