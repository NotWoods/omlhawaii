function uniqueCharacters(...strings) {
	let unique = '';
	for (const string of strings) {
		for (const char of string) {
			if (!unique.includes(char)) unique += char;
		}
	}
	return unique;
}