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
      return response;
    }
  });
};