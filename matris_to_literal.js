

try {
	const input = process.argv[2]; // Argümanı JSON olarak parse et
	// const result = get_views(input);

	// console.log(input);
	const grid = input.trim().split("\n").map(line =>
		line.trim().split(" ").map(Number)
	);

	console.log(grid);
} catch (e) {
	console.error("Geçersiz array literal:", e.message);
	process.exit(1);
}
