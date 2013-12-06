
var basicStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^I visit "(.*?)"$/, function(url, callback) {
        this.visit('http://localhost:8000' + url , callback);
    });

    this.Then(/^I should see "(.*?)"$/, function(text, callback) {
        // express the regexp above with the code you wish you had
        if (this.browser.text('body').indexOf(text) !== -1) {
            callback();
        } else {
            callback.fail(new Error("Expected to be on page with " + text + " : " + pageBody));
        }
    });

};

module.exports = basicStepDefinitionsWrapper;