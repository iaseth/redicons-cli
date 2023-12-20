import { getIconsFromFile, outputJsonPath, redIconsDB, saveIconsToFile } from "./common";



export function addCommand (rest: string[]) {
	const existingIcons = getIconsFromFile();
	console.log(`Found ${existingIcons.length} icons in ${outputJsonPath}!`);

	const iconsToBeAdded = [];
	for (const iconName of rest) {
		const existingIcon = existingIcons.find(icon => icon.name === iconName);
		if (existingIcon) {
			console.log(`\tIcon '${iconName}' already exists in your redicons.json!`);
			continue;
		}

		const icon = redIconsDB.find(icon => icon.name === iconName);
		if (icon) {
			console.log(`\tFound '${iconName}' icon!`);
			iconsToBeAdded.push(icon);
		} else {
			console.log(`\tNot found '${iconName}' icon!`);
		}
	}

	if (iconsToBeAdded.length > 0) {
		saveIconsToFile([...existingIcons, ...iconsToBeAdded]);
		console.log(`Added ${iconsToBeAdded.length} new icons!`);
	} else {
		console.log(`No new icons to be added!`);
	}
}
