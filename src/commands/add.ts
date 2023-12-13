import { getIconsFromFile, redicons, saveIconsToFile } from "./common";



export function addCommand (rest: string[]) {
	const existingIcons = getIconsFromFile();

	const iconsToBeAdded = [];
	for (const iconName of rest) {
		const existingIcon = existingIcons.find(icon => icon.name === iconName);
		if (existingIcon) {
			console.log(`Icon '${iconName}' already exists in your redicons.json!`);
			continue;
		}

		const icon = redicons.find(icon => icon.name === iconName);
		if (icon) {
			console.log(`Found '${iconName}' icon!`);
			iconsToBeAdded.push(icon);
		} else {
			console.log(`Not found '${iconName}' icon!`);
		}
	}

	if (iconsToBeAdded.length > 0) {
		saveIconsToFile([...existingIcons, ...iconsToBeAdded]);
		console.log(`Added ${iconsToBeAdded.length} new icons!`);
	} else {
		console.log(`No new icons to be added!`);
	}
}
