import { getIconsFromFile, outputJsonPath, saveIconsToFile } from "./common";



export function removeCommand (rest: string[]) {
	const existingIcons = getIconsFromFile();
	console.log(`Found ${existingIcons.length} icons in ${outputJsonPath}!`);

	const badIndexes: number[] = [];
	for (const iconName of rest) {
		const existingIconIndex = existingIcons.findIndex(icon => icon.name === iconName);
		if (existingIconIndex === -1) {
			console.log(`\tIcon NOT found: ${iconName}`);
		} else {
			badIndexes.push(existingIconIndex);
			console.log(`\tIcon set to be removed: ${iconName}`);
		}
	}

	if (badIndexes.length > 0) {
		const iconsAfterRemoval = existingIcons.filter((icon, idx) => !badIndexes.includes(idx));
		saveIconsToFile(iconsAfterRemoval);
		console.log(`Removed ${iconsAfterRemoval.length} icons!`);
	} else {
		console.log(`No icons to be removed!`);
	}
}
