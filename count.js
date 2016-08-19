const words = process.argv.slice(2);
const counts = words
    .join('')
    .split('')
    .reduce((map, letter) => {
        map[letter] = (map[letter] || 0) + 1 ;
        return map;
    }, {});

Object
    .keys(counts)
    .sort()
    .forEach((key) => console.log(`${key}: ${counts[key]}`));
