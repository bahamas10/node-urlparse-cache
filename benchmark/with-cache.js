var urlparse = require('../'),
    iterations = 200 * 1000;
    s = 'http://example.com/some/path?key=value&otherkey=othervalue#hash';

console.log('Parsing "%s" for %d iterations (with cache)', s, iterations);
for (var i = 0; i < iterations; i++) {
  urlparse(s);
}
