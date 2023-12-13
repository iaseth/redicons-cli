import rediconsJson from "../redicons.json";
import { RedIconData } from "./data";



export const icons: RedIconData[] = rediconsJson.icons;

export function getIconsFromFile (): RedIconData[] {
	return [];
}

export function saveIconsToFile (icons: RedIconData[]) {
	//
}
