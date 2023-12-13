#!/usr/bin/env node
import rediconsJson from "./redicons.json";
const icons = rediconsJson.icons;



function main () {
	const [command, ...rest] = process.argv.slice(2);
	console.log(`There are ${icons.length} icons ready for use.`);
	console.log(`Now redicons-cli is using TypeScript.`);
}

main();
