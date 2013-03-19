$.mockjax({
  url: 'http://localhost:9200/test/book/_search',
  contentType: 'text/json',
  responseText: {
    "took": 1,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "failed": 0
    },
    "hits": {
        "total": 1,
        "max_score": 0.095891505,
        "hits": [
            {
                "_index": "test",
                "_type": "book",
                "_id": "1",
                "_score": 0.095891505,
                "_source": {
                    "book": {
                        "isbn": "0812504321",
                        "name": "Call of the Wild",
                        "author": {
                            "first_name": "Jack",
                            "last_name": "London"
                        },
                        "pages": 128,
                        "tag": [
                            "fiction",
                            "children"
                        ]
                    }
                }
            }
        ]
    }
  }
});

var element = $("input[type=search]").stretchySearch({
  url: 'http://localhost:9200',
  index: 'test',
  type: 'book',
  label: 'book',
  value: '_id',
  template: ''
});

var menu = element.autocomplete( "widget" );

test("autcomplete enabled on input", 2, function() {
  ok( $("input[type=search]").length === 1, "Input exists");

  ok( typeof($("input[type=search]").data("uiAutocomplete")) === "object", "Autocomplete enabled on input");
});

asyncTest("search for Ja returns exactly 1 result", 3, function(){
  element.val( "ja" ).keydown();

  element.on("autocompleteopen", function(event, ui) {
    ok( true, "search results opened");
    ok( menu.is( ":visible" ), "menu is visible with search result" );
    equal( menu.find( ".ui-menu-item" ).length, 1, "# of menu items" );
    start();
  });
    
});