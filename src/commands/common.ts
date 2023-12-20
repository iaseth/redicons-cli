import fs from "fs";
import rediconsJson from "../redicons.json";
import { RedIconData } from "./data";



export const redicons: RedIconData[] = rediconsJson.icons;
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
		const jo = {icons};
		const jsonString = JSON.stringify(jo, null, "\t");
		fs.writeFileSync(outputJsonPath, jsonString, "utf-8");
		console.log(`Saved ${icons.length} icons to ${outputJsonPath}.`);
	} catch (error) {
		console.log(`Could not save ${icons.length} icons to ${outputJsonPath}.`);
	}
}
