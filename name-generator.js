'use strict';

const newName = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_');


module.exports = function (oldNames){
  if (!Array.isArray(oldNames)) {
    throw new Error('Only array data type is accepted');
  }

  let index = 0,
    indexOfPrefix = 0,
    prefix = '';

  const result = oldNames.reduce(function(resultObject, propName){
    if(index === newName.length) {
      index = 0; 
      prefix = resultObject[oldNames[indexOfPrefix++]];
    }
    
    // only letters can be used as a first class name character
    if(!prefix && !isNaN(newName[index])){ 
      index = 0;
      prefix = resultObject[oldNames[indexOfPrefix++]];//set prefix with the first value of result object
      resultObject[propName] = prefix + newName[index++];
      return resultObject;
    }
    
    resultObject[propName] = prefix + newName[index++];
    return resultObject;  
  },{});

  return result;
}




