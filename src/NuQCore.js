(function() {
  /*
   * This file is part of Nu-Q.
   *
   * Nu-Q is free software: you can redistribute it and/or modify
   * it under the terms of the GNU Lesser General Public License as published by
   * the Free Software Foundation, either version 3 of the License, or
   * any later version.
   *
   * Nu-Q is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU Lesser General Public License for more details.
   *
   * You should have received a copy of the GNU Lesser General Public License
   * along with Nu-Q.  If not, see <http://www.gnu.org/licenses/>.
  
  
  */  var NuQItem, NuQNode, NuQNodeType, NuQProperty, NuQRepository, NuQSession, NuQValue, NuQWorkspace, RepositoryManager;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  RepositoryManager = (function() {
    function RepositoryManager() {}
    RepositoryManager.registry = {};
    RepositoryManager.prototype.register = function(id, repository) {
      return this.registry[id] = repository;
    };
    RepositoryManager.prototype.getRepository = function(id) {
      return this.registry[id];
    };
    return RepositoryManager;
  })();
  exports.manager = new RepositoryManager;
  NuQWorkspace = (function() {
    function NuQWorkspace() {
      throw new Error("NuQWorkspace must be implemented");
    }
    NuQWorkspace.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    NuQWorkspace.prototype.getSession = function() {
      throw new Error("method not implemented");
    };
    NuQWorkspace.prototype.getNodeTypeManager = function() {
      throw new Error("method not implemented");
    };
    return NuQWorkspace;
  })();
  exports.Workspace = NuQWorkspace;
  NuQSession = (function() {
    function NuQSession() {
      throw new Error("NuQSession must be implemented");
    }
    NuQSession.prototype.getUserID = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getItem = function(absPath) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getRootNode = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getNode = function(absPath) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getNodeByIdentifier = function(uuid) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.checkPermission = function(abspath, action) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.impersonate = function(credentials) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.itemExists = function(abspath, callback) {
      throw new Error("method not implemented");
    };
    NuQSession.prototype.nodeExists = function(abspath, callback) {
      throw new Error("method not implemented");
    };
    return NuQSession;
  })();
  exports.Session = NuQSession;
  NuQNodeType = (function() {
    function NuQNodeType() {
      throw new Error("NuQNodeType must be implemented");
    }
    /*
         Returns true if this node type allows the addition of a child node called childNodeName
         of node type nodeTypeName.
         If it's called without specific node type information (nodeTypeName is not specified - undefined)
         (that is, given the definition of this parent node type, the child node name is sufficient
         to determine the intended child node type).
        */
    NuQNodeType.prototype.canAddChildNode = function(nodeName, nodeTypeName) {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns true if removing the child node called nodeName is allowed by this node type.
        */
    NuQNodeType.prototype.canRemoveNode = function(nodeName) {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns true if removing the property called propertyName is allowed by this node type.
        */
    NuQNodeType.prototype.canRemoveProperty = function(propertyName) {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns true if setting propertyName to value is allowed by this node type.
         value parameter can either be a single value as an array of values
        */
    NuQNodeType.prototype.canSetProperty = function(propertyName, value) {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns an array containing the child node definitions of this node type.
        */
    NuQNodeType.prototype.getChildNodeDefinitions = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns the direct subtypes of this node type in the node type inheritance hierarchy
         that is, those which actually declared this node type in their list of supertypes.
        */
    NuQNodeType.prototype.getDeclaredSubtypes = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns the direct supertypes of this node type in the
         node type inheritance hierarchy, that is, those actually declared in this node type.
        */
    NuQNodeType.prototype.getDeclaredSupertypes = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns an array containing the property definitions of this node type.
        */
    NuQNodeType.prototype.getPropertyDefinitions = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns all subtypes of this node type in the node type inheritance hierarchy.
        */
    NuQNodeType.prototype.getSubtypes = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns all supertypes of this node type in the node type inheritance hierarchy.
        */
    NuQNodeType.prototype.getSupertypes = function() {
      throw new Error("NuQNodeType must be implemented");
    };
    /*
         Returns true if the name of this node type or any of its direct or indirect supertypes is equal to nodeTypeName, otherwise returns false.
        */
    NuQNodeType.prototype.isNodeType = function(nodeTypeName) {
      throw new Error("NuQNodeType must be implemented");
    };
    return NuQNodeType;
  })();
  exports.NodeType = NuQNodeType;
  NuQValue = (function() {
    function NuQValue() {
      throw new Error("NuQValue must be implemented");
    }
    NuQValue.prototype.getBinary = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getBoolean = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getDate = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getDecimal = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getDouble = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getLong = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getString = function() {
      throw new Error("NuQValue must be implemented");
    };
    NuQValue.prototype.getType = function() {
      throw new Error("NuQValue must be implemented");
    };
    return NuQValue;
  })();
  NuQRepository = (function() {
    function NuQRepository() {
      throw new Error("NuQRepository must be implemented");
    }
    NuQRepository.prototype.login = function(credentials, repositoryName, callback) {
      throw new Error("method not implemented");
    };
    NuQRepository.prototype.close = function() {
      throw new Error("method not implemented");
    };
    return NuQRepository;
  })();
  exports.Repository = NuQRepository;
  NuQItem = (function() {
    function NuQItem() {
      throw new Error("NuQItem must be implemented");
    }
    NuQItem.prototype.accept = function(visitor) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getName = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getParent = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getPath = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getDepth = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getAncestror = function(depth) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.getSession = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isModified = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isNew = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isNode = function() {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.isSame = function(otherItem) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.refresh = function(keepChanges) {
      throw new Error("method not implemented");
    };
    NuQItem.prototype.remove = function() {
      throw new Error("method not implemented");
    };
    return NuQItem;
  })();
  exports.Item = NuQItem;
  NuQNode = (function() {
    __extends(NuQNode, NuQItem);
    function NuQNode() {
      throw new Error("NuQNode must be implemented");
    }
    NuQNode.prototype.addNode = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.addMixin = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getNodes = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getProperties = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getIdentifier = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.hasNode = function() {
      throw new Error("method not implemented");
    };
    NuQNode.prototype.getNode = function(callback) {
      throw new Error("method not implemented");
    };
    return NuQNode;
  })();
  exports.Node = NuQNode;
  NuQProperty = (function() {
    __extends(NuQProperty, NuQItem);
    function NuQProperty() {
      throw new Error("NuQProperty must be implemented");
    }
    NuQProperty.prototype.getBinary = function() {};
    return NuQProperty;
  })();
  exports.Property = NuQProperty;
}).call(this);
