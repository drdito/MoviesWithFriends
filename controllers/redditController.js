//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//*********Reddit Controller*****************
//*********./controllers/redditController****

// get reddit info
router.get("/reddit", function (req, res) {
  db.reddit.findAll()
    .then(function (dbreddit) {
      var hbsObject = { reddit: dbreddit };
      return res.render("index", hbsObject);
    });
});
