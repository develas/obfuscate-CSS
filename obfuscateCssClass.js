const fs = require('fs');
const obfuscateList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


module.exports = function (sortedClasses){
    let resultObj = {},
        prefix = '',
        sortedProp = index = 0;

    sortedClasses.map( item => {
      if( index < obfuscateList.length ){
        resultObj[item] = prefix + obfuscateList[index++];
      }else{
        index = 0;
        prefix = resultObj[sortedClasses[sortedProp++]];
        resultObj[item] = prefix + obfuscateList[index++];
      }
    });

    return resultObj;
  }