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

// Less fancy, but also effective 😛

module.exports = (n, random) => {
    let result;
    let found = false;
    let min = 1n;
    let max = n;
    let mid;
    let iterations = 0;
  
    do {
      mid = (max - min) / 2n + min;
      iterations++;
      if (min <= random && random < mid) {
        max = mid;
      } else if (mid < random && random <= max) {
        min = mid;
      } else {
        found = true;
        result = mid;
      }
    } while (!found);
    return result;
  };