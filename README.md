Derby New Relic
===============

[Derby JS](http://derbyjs.com) middleware for loading [New Relic's](http://newrelic.com) RUM (Real User Monitoring) script.

Installation
------------

    $ npm install derby-newrelic --save

Usage
-----

In your server file, add the middleware:

    var newrelic = require('derby-newrelic');

    expressApp
      // ...
      .use(newrelic())
      // ...

Include it in your view:

    <Head:>
      {{unescaped $newrelic.script}}
