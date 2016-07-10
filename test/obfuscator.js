const fs = require('fs'),
    expect = require('chai').expect,
    obfuscator = require('../obfuscator'),
    nameGenerator = require('../name-generator');

describe('Obfuscator', () => {
    'use strict';

    it('Correctly processes empty array', () => {
        const result = obfuscator([]);

        expect(result).to.eql({});
    });

    it('Correctly processes simple case', () => {
        const result = obfuscator(['some-long-class-name', 'some-class-name', 'some-class-name']);

        expect(result).to.eql({
            'some-class-name': 'a', // ranked first as 2*length('some-class-name') > 1*length('some-long-class-name')
            'some-long-class-name': 'b'
        });
    });

    it('Correctly obfuscates data', () => {
        const data = JSON.parse(fs.readFileSync('test/data.json', 'UTF-8')),
            result = obfuscator(data),
            uniqueEntries = Array.from(new Set(data).entries()).map(x => x[0]);

        // test that all classes are included
        expect(result).to.have.all.keys(uniqueEntries);
    });

    it('Correctly processes object properties', () => {
        const data = ['toString', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'valueOf'],
            result = obfuscator(data);

        expect(result).to.have.all.keys(data);
    });
});