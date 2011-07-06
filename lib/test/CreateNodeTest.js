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
          var createNode;
          createNode = function() {
            return node.addNode("testNode1", "nt:unstructured");
          };
          return assert.doesNotThrow(createNode);
        }
      },
      "Get a created Node via getNode": {
        topic: function() {
          var self;
          self = this;
          return getSession().getRootNode(function(err, rootnode) {
            return rootnode.addNode("testNode2", "nt:unstructured", function(err, node) {
              return rootnode.getNode("testNode2", function(err, newNode) {
                return self.callback(err, newNode);
              });
            });
          });
        },
        "is created node instance of Node": function(err, node) {
          assert.ok(err === null, err);
          return assert.ok(node instanceof nocr.Node, "node is not instance of nocr.Node" + _.inspect(node));
        },
        "is getPath returning absolute path": function(err, node) {
          return assert.ok(node.getPath() === "/testNode2/", "Incorrect path returned : " + node.getPath());
        },
        "Create a node with deep path": {
          topic: function() {
            var self;
            self = this;
            return getSession().getRootNode(function(err, rootnode) {
              return rootnode.addNode("testNode2/testDeepNode", "nt:unstructured", function(err, node) {
                return rootnode.getNode("testNode2", function(err, newNode) {
                  return self.callback(err, newNode);
                });
              });
            });
          },
          "Is deep node instance of node": function(err, node) {
            assert.ok(err === null, err);
            return assert.ok(node instanceof nocr.Node, "node is not instance of nocr.Node" + _.inspect(node));
          }
        }
      }
    };
  };
}).call(this);
