// ---- Main ----
if (process.argv.length < 3) {
    console.error("Kullanım: node program.js '[[1,2,3,4],[2,3,4,1],[3,4,1,2],[4,1,2,3]]'");
    process.exit(1);
}

try {
    const input = JSON.parse(process.argv[2]); // Argümanı JSON olarak parse et
    // const result = get_views(input);
	
	// console.log(input);
	
	
	input.forEach(element => {
		console.log(...element);
		
		// process.stdout.write(element.join(' ') + '\n');
	});
} catch (e) {
    console.error("Geçersiz array literal:", e.message);
    process.exit(1);
}
