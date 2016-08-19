const maximums = require('./maximums');

const words = process.argv.slice(2);
const counts = words
    .join('')
    .split('')
    .reduce((map, letter) => {
        map[letter] = (map[letter] || 0) + 1 ;
        return map;
    }, {});

const maximum = (key) => maximums[key] || 3;
const colorify = (key) => (string) =>
    `\x1b[${(maximum(key) === counts[key])? 33: (maximum(key) < counts[key])? 31: 32}m${string}\x1b[0m`;

Object
    .keys(counts)
    .sort()
    .forEach((key) => console.log(`${key}: ${colorify(key)(counts[key])}`));
