###
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


###
class RepositoryManager
    @registry = {}
    register: (id,repository) ->
        @registry[id] = repository
    
    getRepository: (id) ->
        @registry[id]
        
exports.manager = new RepositoryManager
class NuQWorkspace
    constructor: ->
        throw new Error "NuQWorkspace must be implemented"
    getRepository: ->
        throw new Error "method not implemented"
    getSession: ->
        throw new Error "method not implemented"
    getNodeTypeManager: ->
        throw new Error "method not implemented"
exports.Workspace = NuQWorkspace

# Session object provides access to repository nodes. It associates a Repository
# and user Credentials
class NuQSession
    constructor: ->
        throw new Error "NuQSession must be implemented"
    getUserID: ->
        throw new Error "method not implemented"
    getItem: (absPath) ->
        throw new Error "method not implemented"
    getRootNode: ->
        throw new Error "method not implemented"
    # gets a node instance giving the absolute path as parameter
    getNode: (absPath) ->
        throw new Error "method not implemented"
    # gets a node instance giving its unique identifier
    getNodeByIdentifier: (uuid) ->
        throw new Error "method not implemented"
    # gets the underlying repository instance
    getRepository: ->
        throw new Error "method not implemented"
    # Check if action is allowed on node requested by abspath
    checkPermission: (abspath, action) ->
        throw new Error "method not implemented"
    # Returns a new session 
    impersonate: (credentials) ->
        throw new Error "method not implemented"
    itemExists: (abspath, callback) ->
        throw new Error "method not implemented"
    nodeExists: (abspath, callback) ->
        throw new Error "method not implemented"
exports.Session = NuQSession

class NuQNodeType
    constructor: ->
        throw new Error "NuQNodeType must be implemented"
    ###
     Returns true if this node type allows the addition of a child node called childNodeName
     of node type nodeTypeName.
     If it's called without specific node type information (nodeTypeName is not specified - undefined)
     (that is, given the definition of this parent node type, the child node name is sufficient
     to determine the intended child node type).
    ###
    canAddChildNode: (nodeName, nodeTypeName) ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns true if removing the child node called nodeName is allowed by this node type.
    ###
    canRemoveNode: (nodeName) ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns true if removing the property called propertyName is allowed by this node type.
    ###
    canRemoveProperty: (propertyName) ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns true if setting propertyName to value is allowed by this node type.
     value parameter can either be a single value as an array of values
    ###
    canSetProperty: (propertyName, value) ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns an array containing the child node definitions of this node type.
    ###
    getChildNodeDefinitions: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns the direct subtypes of this node type in the node type inheritance hierarchy
     that is, those which actually declared this node type in their list of supertypes.
    ###
    getDeclaredSubtypes: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns the direct supertypes of this node type in the
     node type inheritance hierarchy, that is, those actually declared in this node type.
    ###
    getDeclaredSupertypes: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns an array containing the property definitions of this node type.
    ###
    getPropertyDefinitions: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns all subtypes of this node type in the node type inheritance hierarchy.
    ###
    getSubtypes: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns all supertypes of this node type in the node type inheritance hierarchy.
    ###
    getSupertypes: ->
        throw new Error "NuQNodeType must be implemented"
    
    ###
     Returns true if the name of this node type or any of its direct or indirect supertypes is equal to nodeTypeName, otherwise returns false.
    ###
    isNodeType: (nodeTypeName)->
        throw new Error "NuQNodeType must be implemented"

exports.NodeType = NuQNodeType

class NuQValue
    constructor: ->
        throw new Error "NuQValue must be implemented"
    getBinary: ->
        throw new Error "NuQValue must be implemented"
    getBoolean: ->
        throw new Error "NuQValue must be implemented"
    getDate: ->
        throw new Error "NuQValue must be implemented"
    getDecimal: ->
        throw new Error "NuQValue must be implemented"
    getDouble: ->
        throw new Error "NuQValue must be implemented"
    getLong: ->
        throw new Error "NuQValue must be implemented"
    getString: ->
        throw new Error "NuQValue must be implemented"
    getType: ->
        throw new Error "NuQValue must be implemented"

exports.value = NuQValue

class NuQRepository
    # returns a session object
    constructor: ->
        throw new Error "NuQRepository must be implemented"
    login: (credentials, repositoryName, callback) ->
        throw new Error "method not implemented"
    # Ends repository's lifecycle (release resources, finish all sessions)
    close: ->
        throw new Error "method not implemented"

exports.Repository = NuQRepository

# Base type for node and Property 
class NuQItem
    constructor: ->
        throw new Error "NuQItem must be implemented"
    
    # accept a visit from a user
    accept: (visitor) ->
        throw new Error "method not implemented"
    getName: ->
        throw new Error "method not implemented"
    getParent: ->
        throw new Error "method not implemented"
    getPath: ->
        throw new Error "method not implemented"
    getDepth: ->
        throw new Error "method not implemented"
    getAncestror: (depth) ->
        throw new Error "method not implemented"
    getSession: ->
        throw new Error "method not implemented"
    isModified: ->
        throw new Error "method not implemented"
    isNew: ->
        throw new Error "method not implemented"
    isNode: ->
        throw new Error "method not implemented"
    isSame: (otherItem) ->
        throw new Error "method not implemented"
    refresh: (keepChanges) ->
        throw new Error "method not implemented"
    remove: ->
        throw new Error "method not implemented"
 
exports.Item = NuQItem 

class NuQNode extends NuQItem
    constructor: ->
        throw new Error "NuQNode must be implemented"
    addNode: ->
        throw new Error "method not implemented"
    addMixin: ->
        throw new Error "method not implemented"
    getNodes: ->
        throw new Error "method not implemented"
    getProperties: ->
        throw new Error "method not implemented"
    getIdentifier: ->
        throw new Error "method not implemented"
    hasNode: ->
        throw new Error "method not implemented"
    getNode: (callback) ->
        throw new Error "method not implemented"
exports.Node = NuQNode

class NuQProperty extends NuQItem
    constructor: ->
        throw new Error "NuQProperty must be implemented"
    getBinary: ->
exports.Property = NuQProperty