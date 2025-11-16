// Tek boyutlu array için get_view
function get_view(arr) {
    let best = arr[0];
    let view = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > best) {
            best = arr[i];
            view++;
        }
    }
    return view;
}

// 2D array için dört taraflı görünüm
function get_views(matrix) {
    const n = matrix.length;
    let top = [];
    let bottom = [];
    let left = [];
    let right = [];

    // Sol ve sağ (satırlar üzerinden)
    for (let i = 0; i < n; i++) {
        left.push(get_view(matrix[i]));              // soldan bakış
        right.push(get_view([...matrix[i]].reverse())); // sağdan bakış
    }

    // Üst ve alt (sütunlar üzerinden)
    for (let j = 0; j < n; j++) {
        let col = matrix.map(row => row[j]);
        top.push(get_view(col));              // yukarıdan bakış
        bottom.push(get_view(col.reverse())); // aşağıdan bakış
    }

    return [ ...top, ...bottom, ...left, ...right ];
}

// ---- Main ----
if (process.argv.length < 3) {
    console.error("Kullanım: node program.js '[[1,2,3,4],[2,3,4,1],[3,4,1,2],[4,1,2,3]]'");
    process.exit(1);
}

try {
    const input = JSON.parse(process.argv[2]); // Argümanı JSON olarak parse et
    const result = get_views(input);
	
    console.log(result.join(' '));
} catch (e) {
    console.error("Geçersiz array literal:", e.message);
    process.exit(1);
}
