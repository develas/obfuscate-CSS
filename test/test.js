const assert = require('assert');
const groupingAndSorting = require('../obfuscate-CSS');

const rowValues = [ "van", "van", "car", "car", "rar", "car", "tarrrrrrrrrrrrr", "rar"];

describe('Grouping:', function() {
    const groupedList = groupingAndSorting.groupByName(rowValues);

    describe('grouped object', function() {
      it('should be {van:2, car:3, rar:2, tarrrrrrrrrrrrr:1}', function() {
          assert.equal(groupedList.van === 2 && groupedList.car === 3 && groupedList.rar === 2 && groupedList.tarrrrrrrrrrrrr === 1);
      });
    });
});