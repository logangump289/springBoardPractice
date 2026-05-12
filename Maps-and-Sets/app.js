new Set([1,1,2,2,3,4]) 
// returns Set(4) {1, 2, 3, 4}

[...new Set("referee")].join("")
// returns 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// m will look like this: Map(2) { [1, 2, 3] => true, [1, 2, 3] => false }

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if ("aeiou".includes(lowerChar)) {
            if (vowelMap.has(lowerChar)) {
                vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
            } else {
                vowelMap.set(lowerChar, 1);
            }
        }
    }
    return vowelMap;
}