###
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


###
class RepositoryManager
    @registry = {}
    register: (id,repository) ->
        @registry[id] = repository
    
    getRepository: (id) ->
        @registry[id]
        
exports.manager = new RepositoryManager
class Workspace
    constructor: ->
        throw new Error "Workspace must be implemented"
    getRepository: ->
        throw new Error "method not implemented"
    getSession: ->
        throw new Error "method not implemented"
    getNodeTypeManager: ->
        throw new Error "method not implemented"
exports.Workspace = Workspace

# Session object provides access to repository nodes. It associates a Repository
# and user Credentials
class Session
    constructor: ->
        throw new Error "Session must be implemented"
    getUserID: ->
        throw new Error "method not implemented"
    getItem: (absPath, callback) ->
        throw new Error "method not implemented"
    getRootNode: (callback) ->
        throw new Error "method not implemented"
    # gets a node instance giving the absolute path as parameter
    getNode: (absPath, callback) ->
        throw new Error "method not implemented"
    # gets a node instance giving its unique identifier
    getNodeByIdentifier: (uuid, callback) ->
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
exports.Session = Session



class Value
    constructor: ->
        throw new Error "Value must be implemented"
    ###
    # Returns a String representation of the value
    ###
    getString: ->
        throw new Error "method not implemented"
    ###
    # Returns a Binary representation of the value
    ###
    getBinary: ->
	    throw new Error "method not implemented"
    ###
    # Returns a Date representation of the value
    ###
    getDate: ->
        throw new Error "method not implemented"
    ###
    # Returns a Number representation of the value
    ###
    getNumber: ->
        throw new Error "method not implemented"
    ###
    # returns the native js object representation
    ###
    getValue: ->
        throw new Error "method not implemented"
    ###
    # Returns the type of this Value
    ###
    getType: ->
        throw new Error "method not implemented"

exports.Value = Value

class Repository
    # returns a session object
    constructor: ->
        throw new Error "Repository must be implemented"
    login: (credentials, repositoryName, callback) ->
        throw new Error "method not implemented"
    # Ends repository's lifecycle (release resources, finish all sessions)
    close: ->
        throw new Error "method not implemented"

exports.Repository = Repository

# Base type for node and Property 
class Item
    constructor: ->
        throw new Error "Item must be implemented"
    
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
 
exports.Item = Item 

class Node extends Item
    constructor: ->
        throw new Error "Node must be implemented"
    
    ###
    # Creates a new node of given type at relPath.
    # If type is not specified, repository tries to
    #  determine node type
    # Can accept callback func or not, as operations are performed in-memory, there is no requirement to use async
    ###
    addNode: (path, type, callback) ->
        throw new Error "method not implemented"
    ###
    # Sets the single-value property of this node called name to the specified value.
    # Can accept callback func or not, as operations are performed in-memory, there is no requirement to use async
    ###
    setProperty: (name, value, type, callback) ->
        throw new Error "method not implemented"
    ###
    # Returns the property at relPath relative to this node.
    # Can accept callback func or not, as operations are performed in-memory, there is no requirement to use async
    ###
    getProperty: (relPath, callback) ->
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
    getNode: (name, callback) ->
        throw new Error "method not implemented"
exports.Node = Node

class Property extends Item
    constructor: ->
        throw new Error "Property must be implemented"
    getString: ->
        throw new Error "method not implemented"
        getValue: ->
        throw new Error "method not implemented"
    setValue: ->
        throw new Error "method not implemented"
exports.Property = Property

exports.nodetype = require('./nodetype.js')

exports.test = 
    ImplTest : require './test/ImplTest.js'