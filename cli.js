#!/usr/bin/env node
const fs = require("fs");

const rediconsJson = require("./redicons.json");
const icons = rediconsJson.icons;



function main () {
	const [command, ...rest] = process.argv.slice(2);
	console.log(`There are ${icons.length} icons ready for use.`);
}

main();
