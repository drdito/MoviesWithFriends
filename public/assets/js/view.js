// When the url changes, run the function
window.onhashchange = pleaseWork();
// If the profile page is loaded, run an ajax call to the reddit API
function pleaseWork() {
  if (location.href === "http://localhost:8080/profile") {
    // console.log("user is " + $("#user").html());
    redditCall();
  }
}

// Ajax call to return reddit info and write to HTML     
function redditCall() {

  // var movieName = $("#movie").val().trim();
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      // q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6>" +
            post.data.title + "</h6><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p><p><a href='" +
            post.data.url + "'>Source</a></p></li>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6>" +
            post.data.title + "</h6><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'><p><a href='" +
            post.data.url + "'>Source</a></p></li>");
        }
      })
    }
  });
};

$(document).ready(function () {

  $('#sidebar').niceScroll({
    cursorcolor: '#53619d', // Changing the scrollbar color
    cursorwidth: 4, // Changing the scrollbar width
    cursorborder: 'none', // Rempving the scrollbar border
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

});