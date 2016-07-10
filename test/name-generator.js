const expect = require('chai').expect,
      nameGenerator = require('../name-generator');

describe('Name generator', () => {
        'use strict';

        const oldNames = [];
        for(let elm = 1; elm<=53; elm++){
            oldNames.push('cl' + elm);
        }

        it('Has the same length(53)', () => {
            const result = nameGenerator(oldNames);

            expect(Object.keys(result)).to.have.length(53);
        });


         it('Creates new unique names', () => {
            const result = nameGenerator(oldNames),
                  vals = Object.keys(result).map(key => result[key]),
                  uniqueVals = Array.from(new Set(vals).entries()).map(x => x[0]);

            expect(vals).to.eql(uniqueVals);
        });


        it('Does not have numbers at the beginning of a new class name', () => {
            const result = nameGenerator(oldNames);

            expect(result['cl52']).to.eql('Z');
            expect(result['cl53']).to.eql('aa');
        });
});