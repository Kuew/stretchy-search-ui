$('input[name=search]').popover({
  placement: 'bottom',
  html: true,
  title: 'StretchySearch UI',
  content: '<div class="alert alert-success text-center"><h3>Start your search here...</h3></div>' + 
    '<p>Type "A" to get started</p>'
}).popover('show');