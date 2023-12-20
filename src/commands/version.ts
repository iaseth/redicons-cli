import { redIconsDB } from "./common";



export function versionCommand (rest: string[]) {
	console.log(`This is redicons-cli with ${redIconsDB.length} icons!`);
}
