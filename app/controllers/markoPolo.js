'use strict';

var _                 = require('lodash');
const assign          = Object.assign;

// Helper
const baseHelper      = require('../utils/base.js');

exports.printSequence = function(req,res){
  try{
  
    let sequence = "";

    let end = 1000000;

    for(let i = 1 ; i<= end ; i++) {
      if(i%4 == 0) {
        sequence += 'marko'
      }
      else if (i%7 == 0) {
        sequence += 'polo'
      }
      else if (i%4 == 0 && i%7 ==0) {
        sequence += 'markopolo'
      }
      else {
        sequence += i;
      }

      if(i != end) {
        sequence += ','
      }

      if(i%1000 == 0) { /*to switch to new line*/
        sequence += '\n';
      }

    }

    // console.log(sequence);
    
    baseHelper.response(res, baseHelper.success(sequence));

  }catch(err){
    return baseHelper.response(res, baseHelper.error(err.message), 422);
  }
};