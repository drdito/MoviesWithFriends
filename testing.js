//*************** Robot Unicorn Attack*********************
//***************Movies with Friends***********************
//***************testing.js*********************************

//Bringing in required dependencies
var Nightmare = require("nightmare");
var expect = require("chai").expect;

//Describe statements to run with mocha
describe ("Log in page functionality", function() {
  this.timeout(30000);
  it("Should log user in if a username and password that exist in the database are selected", function(done) {
    Nightmare({ show: true })
    .goto("http://localhost:8080/")
    .type("#usr", "billybob")
    .type("#pwd", "123456")
    .click(".btn")
    .evaluate(function() {
      return document.title;
    })
    .then(function(title) {
      expect(title).to.equal("Movies With Friends");
      done();
    })
    .catch(function(err) {
      console.log(err);
    });
  });
  it("Should tell the user that the username or passowrd is wrong if there is no match in the database", function(done) {
    Nightmare({ show: true })
    .goto("http://localhost:8080/")
    .type("#usr", "notrealuser")
    .type("#pwd", "123456")
    .click(".login")
    .wait("#errorHeader")
    .evaluate(function() {
      var checkText = document.getElementById("errorHeader").innerText;
      return checkText;
    })
    .then(function(checkText) {
      expect(checkText).to.equal("Your username or password is incorrect. Please try again.");
      done();
    })
    .catch(function(err) {
      console.log(err);
    });
  });
  it("Should send the user to the signup page if they select to signup", function(done) {
    Nightmare({ show: true })
    .goto("http://localhost:8080/")
    .click(".signUp")
    .wait("#subText")
    .evaluate(function() {
        var checkText = document.getElementById("subText").innerText;
        return checkText;
    })
    .then(function(checkText) {
      expect(checkText).to.equal("Thank you for joining us.");
      done();
    })
    .catch(function(err) {
      console.log(err);
    });
  });
});