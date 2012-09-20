var urlparse = require('../'),
    urls = [
    'http://daveeddy.com/music',
    'http://example.com/something?name=dave',
    'http://example.com/other#hash'
    ];

urls.forEach(function(url) {
  console.log('parsing: %s', url);
  console.dir(urlparse(url));
});
