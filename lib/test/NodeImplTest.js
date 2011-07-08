(function() {
  var assert, getNodeAsync, getSession, getSessionAsync, getSuite, getTestedNode, nocr, nodeInstance, sessionInstance, setNode, setSession, vows, _;
  vows = require("vows");
  assert = require("assert");
  nocr = require("../NoCR.js");
  _ = require("util");
  nodeInstance = null;
  getTestedNode = function() {
    return nodeInstance;
  };
  setNode = function(node) {
    return nodeInstance = node;
  };
  getNodeAsync = function(callback, err) {
    return callback(err, nodeInstance);
  };
  sessionInstance = null;
  getSession = function() {
    return sessionInstance;
  };
  exports.getSession = getSession;
  getSessionAsync = function(callback, err) {
    return callback(err, sessionInstance);
  };
  exports.getSessionAsync = getSessionAsync;
  setSession = function(session) {
    return sessionInstance = session;
  };
  getSuite = function() {
    var suite;
    return suite = {
      '[NoCR] Testing instance of Node': {
        topic: function() {
          return getNodeAsync(this.callback);
        },
        "Instance of nocr.Node": function(err, node) {
          return assert.ok(node instanceof nocr.Node, "Node is not instance of NuQNode");
        },
        "Instance of nocr.Item": function(err, node) {
          return assert.ok(node instanceof nocr.Item, "Node is not instance of NuQItem");
        },
        "GetPath returns String": function(err, node) {
          return assert.ok(typeof node.getPath() === 'string', "GetPath return type is not string");
        }
      },
      "Verify Session": {
        topic: function() {
          return getSession().getNode(getTestedNode().getPath(), this.callback);
        },
        "Compare objects": function(err, node) {
          assert.ok(node !== void 0, "node is undefined");
          assert.ok(node instanceof nocr.Node, "Node is not instance of NuQNode");
          assert.ok(node instanceof nocr.Item, "Node is not instance of NuQItem");
          return assert.ok(getTestedNode() === node, "equality must be verified");
        }
      }
    };
  };
  exports.getTestedNode = getTestedNode;
  exports.getSuite = getSuite;
  exports.setNode = setNode;
  exports.setSession = setSession;
}).call(this);
