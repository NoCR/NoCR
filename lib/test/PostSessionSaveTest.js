(function() {
  var assert, credentials, getCredentials, getCredentialsAsync, nocr, session, setCredentials, testBase, vows, _;
  vows = require("vows");
  assert = require("assert");
  nocr = require("../NoCR.js");
  _ = require("util");
  testBase = require("./ImplTest.js");
  credentials = null;
  getCredentials = function() {
    return credentials;
  };
  exports.getCredentials = getCredentials;
  getCredentialsAsync = function(callback) {
    return callback(null, credentials);
  };
  exports.getCredentialsAsync = getCredentialsAsync;
  setCredentials = function(creds) {
    return credentials = creds;
  };
  exports.setCredentials = setCredentials;
  session = null;
  exports.getSuite = function() {
    var suite;
    return suite = {
      '[NoCR] Post Session.save get credentials for obtaining a new session': {
        topic: function() {
          var self;
          self = this;
          return getCredentialsAsync(function(err, creds) {
            return testBase.getRepository().login(creds, "admin", function(err, session) {
              return session.getNode("/testNode2/testDeepNode/", self.callback);
            });
          });
        },
        "No errors at function call": function(err, node) {
          return assert.ok(err === null, "error found : " + _.inspect(err));
        },
        "Node is instance of Node": function(err, node) {
          return assert.ok(node instanceof nocr.Node, "Invalid return type");
        }
      }
    };
  };
}).call(this);
