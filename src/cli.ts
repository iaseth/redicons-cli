#!/usr/bin/env node
import { commands } from "./commands";



function main () {
	const args = process.argv.slice(2);
	const [command, ...rest] = args;

	switch (command) {
		case "add": case "a": case "+": commands.addCommand(rest); break;
		case "remove": case "r": case "-": commands.removeCommand(rest); break;
		case "update": case "u": commands.updateCommand(rest); break;

		case "list": case "l": case "=": commands.listCommand(rest); break;
		case "search": case "s": case "?": commands.searchCommand(rest); break;

		case "help": case "h": commands.helpCommand(rest); break;
		case "version": case "v": commands.versionCommand(rest); break;
		default: commands.versionCommand(rest); break;
	}
}

main();
