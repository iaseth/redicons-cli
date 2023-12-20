import fs from "fs";
import rediconsJson from "../redicons.json";
import { RedIconData } from "./data";



export const redIconsDB: RedIconData[] = rediconsJson.icons;
export const outputJsonPath = "redicons.json";

export function getIconsFromFile (): RedIconData[] {
	try {
		const jsonString = fs.readFileSync(outputJsonPath, "utf-8");
		const jo = JSON.parse(jsonString);
		const icons = jo.icons;
		return icons;
	} catch (error) {
		return [];
	}
}

export function saveIconsToFile (icons: RedIconData[]) {
	try {
		icons.sort((a, b) => {
			if (a.name < b.name) return -1;
			else if (a.name > b.name) return 1;
			else return 0;
		});
		const jo = {icons};
		const jsonString = JSON.stringify(jo, null, "\t");
		fs.writeFileSync(outputJsonPath, jsonString, "utf-8");
		console.log(`Saved ${icons.length} icons to ${outputJsonPath}.`);
	} catch (error) {
		console.log(`Could not save ${icons.length} icons to ${outputJsonPath}.`);
	}
}
