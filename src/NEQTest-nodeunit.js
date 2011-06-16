var core = require("./NEQCore.js"), a, MyNode, MyRepository,
__hasProp = Object.prototype.hasOwnProperty,
__extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };

  
/*  MyNode = (function() {
    __extends(MyNode,core.Node);
    function MyNode() {
      MyNode.__super__.constructor.apply(this, arguments);
    }
    MyNode.prototype.accept = function() {
	    console.log("Subclassing a coffee class in nodejs");
	    };
    return MyNode;
  })(); */

MyNode = __extends(MyNode,core.Node);
  
   function MyNode() {
      
    }
MyNode.prototype.accept = function() {
    console.log("Subclassing a coffee class in nodejs");
    };

MyRepository = __extends(MyRepository,core.Repository);
   function MyRepository() {
    }
MyRepository.prototype.accept = function() {
	
    };
  
  console.log(MyNode);

a = new MyNode();	

a.accept();
a.getName();