// Linear search solution, slow
const linearSearch = (n, random) => {
    let counter = BigInt(0);
    const result = BigInt(0);
    for(let i = -1; ++i < n; counter++) {
        if(i === random) {
            result = BigInt(i);
            break;
        }
    }
    return result;
};

// Binary search solution, top
module.exports = (n, random) => {
    let init = 0;
    let end = n;
    let chosen = -1;
    while(chosen < random) {
        chosen = ~~((BigInt(init) + BigInt(end)) / BigInt(2));
        if(random > chosen) {
            init = chosen;
            continue;
        }
        if(random < chosen) {
            end = chosen;
        }
    }
    return chosen;
};