(function() {
  var NEQItem, NEQNode, NEQProperty, NEQRepository, NEQSession, NEQWorkspace;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  NEQWorkspace = (function() {
    function NEQWorkspace() {}
    NEQWorkspace.prototype.getRepository = function() {
      throw new Error("NEQWorkspace must be implemented");
    };
    return NEQWorkspace;
  })();
  NEQSession = (function() {
    function NEQSession() {}
    NEQSession.prototype.getUserID = function() {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.getItem = function(absPath) {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.getRootNode = function() {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.getNode = function(absPath) {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.getNodeByIdentifier = function(uuid) {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.getRepository = function() {
      throw new Error("NEQSession must be implemented");
    };
    NEQSession.prototype.impersonate = function(credentials) {
      throw new Error("NEQSession must be implemented");
    };
    return NEQSession;
  })();
  NEQRepository = (function() {
    function NEQRepository() {}
    NEQRepository.prototype.login = function() {
      throw new Error("NEQRepository must be implemented");
    };
    NEQRepository.prototype.getRoot = function() {
      throw new Error("NEQRepository must be implemented");
    };
    return NEQRepository;
  })();
  NEQItem = (function() {
    function NEQItem() {}
    NEQItem.prototype.accept = function(visitor) {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getName = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getParent = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getPath = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getDepth = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getAncestror = function(depth) {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.getSession = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.isModified = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.isNew = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.isNode = function() {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.isSame = function(otherItem) {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.refresh = function(keepChanges) {
      throw new Error("NEQItem must be implemented");
    };
    NEQItem.prototype.remove = function() {
      throw new Error("NEQItem must be implemented");
    };
    return NEQItem;
  })();
  NEQNode = (function() {
    __extends(NEQNode, NEQItem);
    function NEQNode() {
      NEQNode.__super__.constructor.apply(this, arguments);
    }
    NEQNode.prototype.addNode = function() {
      throw new Error("NEQNode must be implemented");
    };
    NEQNode.prototype.addMixin = function() {
      throw new Error("NEQNode must be implemented");
    };
    NEQNode.prototype.getNodes = function() {
      throw new Error("NEQNode must be implemented");
    };
    NEQNode.prototype.getProperties = function() {
      throw new Error("NEQNode must be implemented");
    };
    NEQNode.prototype.getIdentifier = function() {
      throw new Error("NEQNode must be implemented");
    };
    NEQNode.prototype.hasNode = function() {
      throw new Error("NEQNode must be implemented");
    };
    return NEQNode;
  })();
  NEQProperty = (function() {
    __extends(NEQProperty, NEQItem);
    function NEQProperty() {
      NEQProperty.__super__.constructor.apply(this, arguments);
    }
    NEQProperty.prototype.getBinary = function() {
      throw new Error("NEQProperty must be implemented");
    };
    return NEQProperty;
  })();
  exports.Node = NEQNode;
}).call(this);
