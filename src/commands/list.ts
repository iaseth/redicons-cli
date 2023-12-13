import { getIconsFromFile, outputJsonPath } from "./common";



export function listCommand (rest: string[]) {
	const existingIcons = getIconsFromFile();
	console.log(`Found ${existingIcons.length} icons in ${outputJsonPath}!`);

	let idx = 0;
	for (const icon of existingIcons) {
		console.log(`\tIcon ${idx+1}/${existingIcons.length}: "${icon.name}"`);
		idx++;
	}
}
