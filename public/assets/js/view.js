// When the url changes, run the function
window.onhashchange = ProfileUpload();
// If the profile page is loaded, render data from reddit and omdb
function ProfileUpload() {
  console.log("The username is " + $("#user").html());
  if (location.href === "http://localhost:8080/profile" || location.href ==="https://movieswithfriends.herokuapp.com/profile") {
    // This is ugly, but for a reason. See notes below...
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
    friendPicRender();
  }
}

// Ajax call to return reddit info and write to HTML. 
// I had to do these in separate functions to prevent the browser from locking up.    
function redditCall0() {
  var movieName = ($("#title0").html());
  redditAjax(movieName);
};

function redditCall1() {
  var movieName = ($("#title1").html());
  redditAjax(movieName);
};

function redditCall2() {
  var movieName = ($("#title2").html());
  redditAjax(movieName);
};

function redditCall3() {
  var movieName = ($("#title3").html());
  redditAjax(movieName);
};

function redditCall4() {
  var movieName = ($("#title4").html());
  redditAjax(movieName);
};

// AJAX call to grab movie posters from OMDB API 
// I had to do these in separate functions to prevent the browser from locking up.  
function OMDBCall0() {
  var movieName = ($("#title0").html());
  var x = 0;
  omdbAjax(movieName, x);
};

function OMDBCall1() {
  var movieName = ($("#title1").html());
  var x = 1;
  omdbAjax(movieName, x);
};

function OMDBCall2() {
  var movieName = ($("#title2").html());
  var x = 2;
  omdbAjax(movieName, x);
};

function OMDBCall3() {
  var movieName = ($("#title3").html());
  var x = 3;
  omdbAjax(movieName, x);
};

function OMDBCall4() {
  var movieName = ($("#title4").html());
  var x = 4;
  omdbAjax(movieName, x);
};

function redditAjax(movieName) {
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/movies/search.json",
    data: {
      q: movieName,
      restrict_sr: true,
      sort: "relevance",
      t: "month",
      limit: 5,
      raw_json: 1
    },
    success: function (response) {
      postReddit(response);
    }
  });
};

function postReddit(response) {
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
  });
};

function omdbAjax(movieName, x) {
  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/",
    data: {
      apikey: "d577c18b",
      t: movieName,
      type: "movie"
    },
    success: function (response) {
      $("#movie" + x).attr("src", response.Poster);
    }
  });
};

// Render scrollbar on ready
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

function friendPicRender() {
  var friendPics = [
    "/assets/images/celebPics/ash.jpg",
    "/assets/images/celebPics/catwoman.jpg",
    "/assets/images/celebPics/doctor.png",
    "/assets/images/celebPics/katniss.jpg",
    "/assets/images/celebPics/marty.jpg",
    "/assets/images/celebPics/wonderWoman.jpg"
  ];
  friendPics = shuffle(friendPics);
  for (var i = 0; i < $(".card-img-top").length; i++) {
    $("#friend" + i).attr("src", friendPics[i]);
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}