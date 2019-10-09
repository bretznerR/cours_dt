const ig = require('./instagram');


/**
 * configuration login et like Instagram
 */
(async ()=>{
  await ig.initialize();
  await ig.login('', '');
  await ig.like(['cars', 'newyork']);

})()