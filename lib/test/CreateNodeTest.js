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
      "[NoCR] Testing node creation feature": {
        topic: function() {
          var node, self;
          self = this;
          return node = getSession().getRootNode(this.callback);
        },
        "Test addnode": function(err, node) {
          return node.addNode("mynode", "nt:unstructured");
        }
      }
    };
  };
}).call(this);
