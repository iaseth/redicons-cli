


const commands = [
	{command: "add", shortcut: "a", description: "Add an icon."},
	{command: "remove", shortcut: "r", description: "Remove an icon."},
	{command: "update", shortcut: "u", description: "Update an icon."},
	{command: "list", shortcut: "l", description: "List all icons."},
	{command: "search", shortcut: "s", description: "Search for an icon."},
	{command: "help", shortcut: "h", description: "Just show some help."},
	{command: "version", shortcut: "v", description: "Show version info."}
];

export function helpCommand (rest: string[]) {
	for (const command of commands) {
		console.log(`| ${command.command.padEnd(15)} | ${command.shortcut.padEnd(4)} | ${command.description.padEnd(40)} |`);
	}
}
