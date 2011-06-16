(function() {
  var Node, a, api;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  api = require('./NEQCore.coffee');
  Node = (function() {
    __extends(Node, api.Node);
    function Node() {
      Node.__super__.constructor.apply(this, arguments);
    }
    Node.prototype.accept = function() {};
    return Node;
  })();
  console.log("test");
  a = new Node();
  console.log(a);
  a.accept;
}).call(this);
