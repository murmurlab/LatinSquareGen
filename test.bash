#!/usr/bin/bash

if [ $# -ne 1 ]; then
	echo "Usage: $0 /home/ahmbasar/sources/repos/rush01/a.out"
	exit 1
fi

# The number of Latin squares for n = 1 to 11
# https://en.wikipedia.org/wiki/Latin_square#Number_of_n_%C3%97_n_Latin_squares

python3 app.py -c 4 | while read line
do
	echo "Line: $line"
	views=$(node get_view.js "$line")
	matris=$(node get_matris_display.js "$line")
	# echo "Views: $views"
	# echo $'Matris: \x0a'"$matris"
	# echo "---------------------"
	outw=$($1 "$views")
	# echo "outw: $outw"
	outm=$(node matris_to_literal.js "$outw")
	# echo "outm: $outm"
	
	# echo "our> $views"
	# echo "myo< $(node get_view.js "$outm")"
	
	node get_view.js "$outm" | diff - <(echo "$views")
	if [ $? -ne 0 ]; then
		echo "Mismatch in views!"
		exit 1
	fi
	echo "====================="
done
