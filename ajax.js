console.log("STARTING");

$.ajax("https://www.reddit.com/r/popular/top/.json?count=20", {
  success: function(data) {
    var row = data.data.children;
    console.log("SUCCESSFULLY GOT LIST");

    for (var i = 0, l = row.length; i < l; i++) {
      var post = row[i].data;
      var votes = post.score;
      var title = post.title;
      var subtime = post.created_utc;
      console.log(title);
    }

    var row = [data.data.children];

    for (var i = 0; i < row.length; i++) {
      console.log(row[i]);
      var html = "<div>";
      html += row[i];
      html += "</div>";
      $("row").append(html);
    }
  },
  error: function() {
    console.log("ERROR GETTING DATA");
  }
});
