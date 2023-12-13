#!/usr/bin/env node
import { commands } from "./commands";
import rediconsJson from "./redicons.json";
const icons = rediconsJson.icons;



function main () {
	const args = process.argv.slice(2);
	const [command, ...rest] = args;

	console.log(`There are ${icons.length} icons ready for use.`);
	console.log(`Now redicons-cli is using TypeScript.`);

	switch (command) {
		case "add": case "a": commands.addCommand(rest); break;
		case "remove": case "r": commands.removeCommand(rest); break;

		case "list": case "l": commands.listCommand(rest); break;
		case "search": case "s": commands.searchCommand(rest); break;

		case "help": case "h": commands.helpCommand(rest); break;
		case "version": case "v": commands.versionCommand(rest); break;
		default: commands.versionCommand(rest); break;
	}
}

main();
