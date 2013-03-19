$.mockjax({
  url: 'http://localhost:9200/test/book/_search',
  // url: 'http://localhost:9200/*',
  contentType: 'text/json',
  proxy: 'mocks/books.js'
});

$("input[type=search]").stretchySearch({
  url: 'http://localhost:9200',
  index: 'test',
  type: 'book',
  label: 'book',
  value: '_id',
  template: ''
});

test("autcomplete enabled on input", function() {
  ok( $("input[type=search]").length === 1, "Input exists");

  ok( typeof($("input[type=search]").data("uiAutocomplete")) === "object", "Autocomplete enabled on input");
});