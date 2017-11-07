// When the url changes, run the function
window.onhashchange = ProfileUpload();
// If the profile page is loaded, run an ajax call to the reddit API
function ProfileUpload() {
  console.log("The username is " + $("#user").html());
  if (location.href === "http://localhost:8080/profile") {
    // console.log("user is " + $("#user").html());
    redditCall0();
    redditCall1();
    redditCall2();
    redditCall3();
    redditCall4();
    OMDBCall0();
    OMDBCall1();
    OMDBCall2();
    OMDBCall3();
    OMDBCall4();
  }
}

// Ajax call to return reddit info and write to HTML     
function redditCall0() {

  var movieName = ($("#title0").html());
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p></li><hr>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'></li><hr>");
        }
      })
    }
  });
};

function redditCall1() {

  var movieName = ($("#title1").html());
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p></li><hr>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'></li><hr>");
        }
      })
    }
  });
};

function redditCall2() {

  var movieName = ($("#title2").html());
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p></li><hr>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'></li><hr>");
        }
      })
    }
  });
};

function redditCall3() {

  var movieName = ($("#title3").html());
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p></li><hr>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'></li><hr>");
        }
      })
    }
  });
};

function redditCall4() {

  var movieName = ($("#title4").html());
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "top",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      var children = response.data.children;
      $.each(children, function (i, post) {
        if (post.data.selftext_html) {
          $("#redditData").append("<li class='redditPost'><h6><a href='" + 
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><p>" +
            post.data.selftext_html + "</p></li><hr>");
        }
        else {
          $("#redditData").append("<li class='redditPost'><h6><a href='" +
            post.data.url + "' target='_blank'>" +
            post.data.title + "</h6></a><p>Author: " +
            post.data.author + "</p><p>Reddit Score: " +
            post.data.score + "</p><img src='" +
            post.data.thumbnail + "' alt='preview image'></li><hr>");
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

// AJAX call to grab movie posters from OMDB API 
function OMDBCall0() {
  var movieName = ($("#title0").html());
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie0").attr("src", response.Poster);
    }
  });
};

function OMDBCall1() {
  var movieName = ($("#title1").html());
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie1").attr("src", response.Poster);
    }
  });
};

function OMDBCall2() {
  var movieName = ($("#title2").html());
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie2").attr("src", response.Poster);
    }
  });
};

function OMDBCall3() {
  var movieName = ($("#title3").html());
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie3").attr("src", response.Poster);
    }
  });
};

function OMDBCall4() {
  var movieName = ($("#title4").html());
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie4").attr("src", response.Poster);
    }
  });
};