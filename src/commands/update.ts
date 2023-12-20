import { getIconsFromFile, outputJsonPath, saveIconsToFile } from "./common";
import { redicons } from "./data";



export function updateCommand (rest: string[]) {
	const existingIcons = getIconsFromFile();
	if (existingIcons.length === 0) {
		console.log(`No icons were found in your JSON!`);
		return;
	}

	const existingIconNames = existingIcons.map(icon => icon.name);
	const iconsToBeUpdated = rest || existingIconNames;
	console.log(`Updating ${iconsToBeUpdated.length} icons:`);

	const updatedIndexes: number[] = [];
	for (const iconName of iconsToBeUpdated) {
		const existingIconIndex = existingIcons.findIndex(icon => icon.name === iconName);
		const updatedIcon = redicons.find(icon => icon.name === iconName);
		if (existingIconIndex === -1) {
			console.log(`\tIcon NOT found in input file: '${iconName}'`);
		} else if (updatedIcon) {
			existingIcons[existingIconIndex] = updatedIcon;
			updatedIndexes.push(existingIconIndex);
			console.log(`\tIcon set to be updated: '${iconName}'`);
		} else {
			console.log(`\tIcon NOT found in database: '${iconName}'`);
		}
	}

	if (updatedIndexes.length > 0) {
		saveIconsToFile(existingIcons);
		console.log(`Updated ${updatedIndexes.length} icons!`);
	} else {
		console.log(`No icons were updated!`);
	}
}
