(function() {
  var assert, core, getNode, getNodeAsync, getSuite, nodeInstance, setNode, vows, _;
  vows = require("vows");
  assert = require("assert");
  core = require("../src/NuQCore.js");
  _ = require("util");
  nodeInstance = null;
  getNode = function() {
    return repositoryInstance;
  };
  setNode = function(node) {
    return nodeInstance = node;
  };
  getNodeAsync = function(callback, err) {
    return callback(err, nodeInstance);
  };
  getSuite = function() {
    var suite;
    return suite = {
      '[Nu-Q] Testing instance of Node': {
        topic: function() {
          return getNodeAsync(this.callback);
        },
        "Instance of NuQNode": function(err, node) {
          return assert.ok(node instanceof core.Node, "Node is not instance of NuQNode");
        },
        "Instance of NuQItem": function(err, node) {
          return assert.ok(node instanceof core.Item, "Node is not instance of NuQItem");
        },
        "GetPath returns String": function(err, node) {
          return assert.ok(typeof node.getPath() === 'string', "GetPath return type is not string");
        }
      }
    };
  };
  exports.getNode = getNode;
  exports.getSuite = getSuite;
  exports.setNode = setNode;
}).call(this);
