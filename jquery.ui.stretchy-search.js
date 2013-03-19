(function($) {  
  $.widget("ui.stretchySearch", $.ui.autocomplete, {
    options: {
      url: 'http://localhost:9200',
      index: 'test',
      type: 'book',
      label: 'book',
      value: '_id',
      template: ''
    },
    
    _create: function() {
      var self = this,
      o = self.options,
      el = self.element;
      
      el.autocomplete({
        source: function(request, response) {
          $.ajax({
            url: o.url + '/' + o.index + '/' + o.type + '/' + '_search',
            dataType: "jsonp",
            data: {
              q: request.term,
              callback: '?'
            },
            success: function(data) {
              response( $.map( data.hits.hits, function( hit ) {
                return {
                  label: hit._source[o.label].name, // TODO: Template this.
                  value: hit[o.value]
                }
              }));
            }
          });
        },
        minLength: 2,
        select: function(event, ui) {
          console.log( ui.item ?
            "Selected: " + ui.item.label + " ("+ ui.item.value +")":
            "Nothing selected, input was " + this.value
          );
        }
      });
    },
    
    destroy: function() {
      // remove the autocomplete
    }
  });
})(jQuery);  