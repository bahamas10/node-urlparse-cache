var urlparse = require('../'),
    parse = require('url').parse,
    assert = require('assert'),
    urls = [
    'http://daveeddy.com/music',
    'http://example.com/something?name=dave',
    'http://example.com/other#hash'
    ];

urls.forEach(function(url) {
  console.log('testing: %s', url);
  assert.deepEqual(parse(url, true), urlparse(url))
});
