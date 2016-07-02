'use strict';

const obfuscateCssClass = require('./obfuscate');

module.exports = function (data){

  let group = {};

  function groupByName(data){
    while(data.length){
      let item = data[0];
      group[item] = 0;

      for(let i=0; i<data.length; i++){
        if(data[i] === item){
          group[item] += 1;
          data.splice(i, 1);
          i--;
        }
      }
    }
    return group;
  }

  function orderByValue(){
    let sortedClasses = Object.keys(group)
                              .sort((a,b) => b.length*group[b] - a.length*group[a]);
    return sortedClasses;
  }

  groupByName(data);
  let sorted = orderByValue();

  return obfuscateCssClass(sorted);
}