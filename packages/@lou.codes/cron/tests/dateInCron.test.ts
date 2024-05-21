import type { Tests } from "@lou.codes/test";
import { dateInCron } from "../src/dateInCron.js";

const dateInCronTest = dateInCron({
	dayOfMonth: 5,
	dayOfWeek: 5,
	hour: 5,
	minute: 5,
	month: 5,
});

export const dateInCronTests = [
	{
		given: "a date inside the cron expression",
		must: "return true",
		received: () => dateInCronTest(new Date("1989-05-05T05:05:00.000")),
		wanted: () => true,
	},
	{
		given: "a date outside the cron expression",
		must: "return false",
		received: () => dateInCronTest(new Date("2024-05-05T05:05:00.000")),
		wanted: () => false,
	},
] satisfies Tests<boolean>;
