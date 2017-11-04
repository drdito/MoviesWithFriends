// On click, call redditCall function
$("#click").on("click", function () {
  redditCall();
});

//set up ajax call to return reddit info within a function      
function redditCall() {
  var movieName = $("#movie").val().trim();

  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "hot",
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#content").append("<div><h3>" +
            post.data.title + "</h3><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p><p><a href='" +
            post.data.url + "'>Source</a></p></div>");
        }
        else {
          $("#content").append("<div><h3>" +
            post.data.title + "</h3><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'><p><a href='" +
            post.data.url + "'>Source</a></p></div>");
        }
      })
    }
  });
};