$.getJSON("http://www.reddit.com/r/pics/.json?jsonp=?", function(data) {
  $.each(data.data.children, function(i, item) {
    $("<img/>")
      .attr("src", item.data.url)
      .appendTo("#images");
  });
});
