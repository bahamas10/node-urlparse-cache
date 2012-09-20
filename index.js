var parse = require('url').parse,
    cache = {};

module.exports = function(url) {
  if (!cache[url]) cache[url] = parse(url, true);
  return cache[url];
};
