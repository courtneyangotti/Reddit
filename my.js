console.log("STARTING");

$.ajax("https://www.reddit.com/r/popular/top/.json?count=20", {
  success: function(data) {
    var post_list = data.data.children;
    console.log("SUCCESSFULLY GOT LIST");

    for (var i = 0, l = post_list.length; i < l; i++) {
      var post = post_list[i].data;
      var votes = post.score;
      var title = post.title;
      var subtime = post.created_utc;
      console.log(title);
      var html =
        "<div class='post'><div class='post__sidebar'><span></span><span>2.5k</span><span></span></div><div class='post__body'> <div class='post__title'><span>";
      html += title;
      html += "</span></div><div class='post__text'><span>";
      html += "";

      if (post.post_hint == "image") {
        html += "<img src='";
        html += post.preview.images[0].source.url;
        html += "' alt='Smiley face' width='200px'>";
        html +=
          "</span></div><div class='post__options'><span>279 Comments  Give Award  Share  Save</span></div></div></div>";

        $(".post-list").append(html);
      }
    }
  },
  error: function() {
    console.log("ERROR GETTING DATA");
  }
});
