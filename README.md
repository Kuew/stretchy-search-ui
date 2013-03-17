# stretchy-search-ui

A jQuery UI plugin for quick and easy ElasticSearch results

&copy; Tony Wieczorek (tonyjw@gmail.com) 2013

Released under the GPLv3

Love ElasticSearch, but want an easy way to integrate search results in a simple input box?
StretchySearch UI is a jQuery UI plugin that lets you easily integrate ElasticSearch results in your site.

## Quickstart

Install on your own site:
* Requires jQuery and jQueryUI.


### See it in action
TODO: Demo site

Run on a local webserver:
```ruby
cd demo
bundle install
ruby app.rb
```
Then, go to http://localhost:4567/ and start searching in the upper right-hand corner.

## Development

Install [grunt](http://gruntjs.com/getting-started), and dependencies:
```bash
npm install -g grunt-cli
npm install
```

### Running Unit Tests
```bash
grunt qunit
```