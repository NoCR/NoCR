(function() {
  /*
   * This file is part of No-CR.
   *
   * No-CR is free software: you can redistribute it and/or modify
   * it under the terms of the GNU Lesser General Public License as published by
   * the Free Software Foundation, either version 3 of the License, or
   * any later version.
   *
   * No-CR is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU Lesser General Public License for more details.
   *
   * You should have received a copy of the GNU Lesser General Public License
   * along with No-CR.  If not, see <http://www.gnu.org/licenses/>.
  
  
  */  var Item, Node, Property, Repository, RepositoryManager, Session, Value, Workspace;
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
  Workspace = (function() {
    function Workspace() {
      throw new Error("Workspace must be implemented");
    }
    Workspace.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    Workspace.prototype.getSession = function() {
      throw new Error("method not implemented");
    };
    Workspace.prototype.getNodeTypeManager = function() {
      throw new Error("method not implemented");
    };
    return Workspace;
  })();
  exports.Workspace = Workspace;
  Session = (function() {
    function Session() {
      throw new Error("Session must be implemented");
    }
    Session.prototype.getUserID = function() {
      throw new Error("method not implemented");
    };
    Session.prototype.getItem = function(absPath, callback) {
      throw new Error("method not implemented");
    };
    Session.prototype.getRootNode = function(callback) {
      throw new Error("method not implemented");
    };
    Session.prototype.getNode = function(absPath, callback) {
      throw new Error("method not implemented");
    };
    Session.prototype.getNodeByIdentifier = function(uuid, callback) {
      throw new Error("method not implemented");
    };
    Session.prototype.getRepository = function() {
      throw new Error("method not implemented");
    };
    Session.prototype.checkPermission = function(abspath, action) {
      throw new Error("method not implemented");
    };
    Session.prototype.impersonate = function(credentials) {
      throw new Error("method not implemented");
    };
    Session.prototype.itemExists = function(abspath, callback) {
      throw new Error("method not implemented");
    };
    Session.prototype.nodeExists = function(abspath, callback) {
      throw new Error("method not implemented");
    };
    return Session;
  })();
  exports.Session = Session;
  Value = (function() {
    function Value() {
      throw new Error("Value must be implemented");
    }
    /*
        # Returns a String representation of the value
        */
    Value.prototype.getString = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns a Binary representation of the value
        */
    Value.prototype.getBinary = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns a Date representation of the value
        */
    Value.prototype.getDate = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns a Number representation of the value
        */
    Value.prototype.getNumber = function() {
      throw new Error("method not implemented");
    };
    /*
        # returns the native js object representation
        */
    Value.prototype.getValue = function() {
      throw new Error("method not implemented");
    };
    /*
        # Returns the type of this Value
        */
    Value.prototype.getType = function() {
      throw new Error("method not implemented");
    };
    return Value;
  })();
  exports.Value = Value;
  Repository = (function() {
    function Repository() {
      throw new Error("Repository must be implemented");
    }
    Repository.prototype.login = function(credentials, repositoryName, callback) {
      throw new Error("method not implemented");
    };
    Repository.prototype.close = function() {
      throw new Error("method not implemented");
    };
    return Repository;
  })();
  exports.Repository = Repository;
  Item = (function() {
    function Item() {
      throw new Error("Item must be implemented");
    }
    Item.prototype.accept = function(visitor) {
      throw new Error("method not implemented");
    };
    Item.prototype.getName = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.getParent = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.getPath = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.getDepth = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.getAncestror = function(depth) {
      throw new Error("method not implemented");
    };
    Item.prototype.getSession = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.isModified = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.isNew = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.isNode = function() {
      throw new Error("method not implemented");
    };
    Item.prototype.isSame = function(otherItem) {
      throw new Error("method not implemented");
    };
    Item.prototype.refresh = function(keepChanges) {
      throw new Error("method not implemented");
    };
    Item.prototype.remove = function() {
      throw new Error("method not implemented");
    };
    return Item;
  })();
  exports.Item = Item;
  Node = (function() {
    __extends(Node, Item);
    function Node() {
      throw new Error("Node must be implemented");
    }
    /*
        #  Creates a new node of given type at relPath.
        #  If type is not specified, repository tries to
        #  determine node type
        */
    Node.prototype.addNode = function(path, type) {
      throw new Error("method not implemented");
    };
    /*
        # Sets the single-value property of this node called name to the specified value.
        */
    Node.prototype.setProperty = function(name, value, type, callback) {
      throw new Error("method not implemented");
    };
    /*
        # Returns the property at relPath relative to this node.
        */
    Node.prototype.getProperty = function(relPath, callback) {
      throw new Error("method not implemented");
    };
    Node.prototype.addMixin = function() {
      throw new Error("method not implemented");
    };
    Node.prototype.getNodes = function() {
      throw new Error("method not implemented");
    };
    Node.prototype.getProperties = function() {
      throw new Error("method not implemented");
    };
    Node.prototype.getIdentifier = function() {
      throw new Error("method not implemented");
    };
    Node.prototype.hasNode = function() {
      throw new Error("method not implemented");
    };
    Node.prototype.getNode = function(name, callback) {
      throw new Error("method not implemented");
    };
    return Node;
  })();
  exports.Node = Node;
  Property = (function() {
    __extends(Property, Item);
    function Property() {
      throw new Error("Property must be implemented");
    }
    Property.prototype.getString = function() {
      throw new Error("method not implemented");
      ({
        getValue: function() {}
      });
      throw new Error("method not implemented");
    };
    Property.prototype.setValue = function() {
      throw new Error("method not implemented");
    };
    return Property;
  })();
  exports.Property = Property;
  exports.nodetype = require('./nodetype.js');
  exports.test = {
    ImplTest: require('./test/ImplTest.js')
  };
}).call(this);
