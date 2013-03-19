$("input[type=search]").stretchySearch();

test("autcomplete enabled on input", function() {
  ok( $("input[type=search]").length === 1, "Input exists");

  ok( typeof($("input[type=search]").data("uiAutocomplete")) === "object", "Autocomplete enabled on input");
});