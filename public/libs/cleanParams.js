"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanParams = void 0;

var cleanParams = function cleanParams(obj) {
  for (var dakey in obj) {
    if (obj[dakey] === null || obj[dakey] === undefined || obj[dakey].length == 0) {
      delete obj[dakey];
    }
    /*  else {
       obj[dakey] = new RegExp('^'+obj[dakey]+'$', "i");
    } */

  }

  return obj;
};

exports.cleanParams = cleanParams;