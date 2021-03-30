const { performance } = require('perf_hooks');
const assert = require('assert');
const search = require('../index');

describe('performance suite', () => {
    const BASE = 10;
    const LENGTH = 150;
    const LIMIT_TIME = 0.5
    const getLimit = n => BigInt(n);
    const getNumToSearch = n => n - BigInt(1);
    const testArr = Array.from({ length: LENGTH }, (_, i) => Math.pow(BASE, i + 1));
    
    describe('limit maximum number suite', () => {
        testArr.forEach(test => {
            const limit = getLimit(test);
            const number = getNumToSearch(limit);

            it(`should take less than 0.5ms finding the number ${number} inside of the list between 1 and ${limit}`, () => {
                const start = performance.now();
                const searchResult = search(limit, number);
                const time = performance.now() - start;
        
                console.info('> search: ', time);
                assert.equal(Number(number), Number(searchResult));
                assert(time < LIMIT_TIME);
            });
        });
    });
});