urlparse-cache
==============

Parse a url string using Node's builtin module and cache the results

Usage
-----

``` js
var urlparse = require('urlparse-cache');
urlparse('http://daveeddy.com/?page=index');
// => same object as require('url').parse(<url>)

urlparse('http://daveeddy.com/?page=index'); // cache hit
// => same object as above
```

Benchmark
---------

Parsing a URL 200,000 times with no cache using `require('url').parse(uri, true)`

    $ time node benchmark/no-cache.js
    Parsing "http://example.com/some/path?key=value&otherkey=othervalue#hash" for 200000 iterations (no cache)

    real    0m6.997s
    user    0m6.972s
    sys     0m0.061s

Parsing a URL 200,000 times using this module to cache the result of `require('url').parse(uri, true)`

    $ time node benchmark/with-cache.js
    Parsing "http://example.com/some/path?key=value&otherkey=othervalue#hash" for 200000 iterations (no cache)

    real    0m0.080s
    user    0m0.068s
    sys     0m0.011s

Notes
-----

The cache has no method for clearing out old keys/values, as the url->object
mapping will never change, ie. same url in, same url object out.  This has the
potential to get very large if you parse a lot of different urls.

Installation
------------

    npm install urlparse-cache

Tests
-----

    npm test

License
-------

MIT License
