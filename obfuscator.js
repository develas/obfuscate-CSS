'use strict';

const obfuscateCssClass = require('./name-generator');

module.exports = function (data){
  if (!Array.isArray(data)) {
    throw new Error('Only array data type is accepted');
  }

  const group = {};

  function groupByName(data){
    data.forEach(function(item){
      const count = group[item]?group[item] + 1:1;
      group[item] = count;
    });
  }

  function orderByValue(){
    const sortedClasses = Object.keys(group)
                                .sort((a,b) => b.length*group[b] - a.length*group[a]);

    return sortedClasses;
  }

  groupByName(data);
  const sorted = orderByValue();

  return obfuscateCssClass(sorted);
}