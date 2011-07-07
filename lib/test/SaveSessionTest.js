(function() {
  var assert, getSession, getSessionAsync, impltest, nocr, vows, _;
  vows = require("vows");
  assert = require("assert");
  nocr = require("../NoCR.js");
  impltest = require("./ImplTest.js");
  _ = require('util');
  getSession = function() {
    return impltest.getSession();
  };
  getSessionAsync = function(callback, err) {
    return callback(err, impltest.getSession());
  };
  exports.getSuite = function() {
    var suite;
    return suite = {
      "[NoCR] Testing session.save feature": {
        topic: function() {
          return getSession().save(this.callback);
        },
        "Session.save doesn't returns an error": function(err, results) {
          return assert.ok(err === null, "Error returned : " + err);
        }
      }
    };
  };
}).call(this);
