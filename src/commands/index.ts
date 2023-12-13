import { addCommand } from "./add";
import { helpCommand } from "./help";
import { listCommand } from "./list";
import { removeCommand } from "./remove";
import { searchCommand } from "./search";
import { versionCommand } from "./version";



export const commands = {
	addCommand,
	removeCommand,

	listCommand,
	searchCommand,

	helpCommand,
	versionCommand,
};
