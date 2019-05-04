console.log("STARTING");

$.ajax("https://www.reddit.com/r/popular/top/.json?count=20", {
  success: function(data) {
    var row = data.data.children;
    console.log("SUCCESSFULLY GOT LIST");

    //RICARDO:   GET THE POST-LIST FROM YOUR HTML PAGE
    let post_list = document.querySelector(".post-list");


    for (var i = 0, l = row.length; i < l; i++) {
      var post = row[i].data;
      var votes = post.score;
      var title = post.title;
      var subtime = post.created_utc;

      //RICARDO: NOW CREATE AN ELEMENT TO PUT IN THE LIST, ILL USE THE CARD
      var postCard = document.createElement("div");
      // SET THE CLASS
      postCard.className ="card item1";
      //YOU MAKE ANOTHER ELEMENT TO PUT INSIDE THE CARD
      var titleElement = document.createElement("div");
      //SET THE TEXT OD THE SECOND ELEMENT TO TITLE
      titleElement.innerText = title;
      //APPEND TITLE TO CARD
      postCard.appendChild(titleElement);

      //FINALLY APPEND CARDO TO LIST
      post_list.appendChild(postCard);
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
