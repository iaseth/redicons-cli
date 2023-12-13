import { icons } from "./common";



export function searchCommand (rest: string[]) {
	const resultIcons = icons.filter(icon => {
		for (const arg of rest) {
			if (icon.name.includes(arg)) {
				return true;
			}
		}
		return false;
	});

	console.log(`Found ${resultIcons.length} icons matching your query.`);
	let idx = 0;
	for (const icon of resultIcons) {
		console.log(`\t${idx+1}. ${icon.name}`);
		idx++;
	}
}
