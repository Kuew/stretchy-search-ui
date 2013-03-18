(function($) {  
  $.widget("ui.stretchySearch", $.ui.autocomplete, {
    options: {
      
    },
    
    _create: function() {
      var self = this,
      o = self.options,
      el = self.element;
      
      el.autocomplete({
        source: [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ]
      });
    },
    
    destroy: function() {
      // remove the autocomplete
    }
  });
})(jQuery);  