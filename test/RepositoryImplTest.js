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
 */
var vows = require('vows'),
    assert = require('assert'),
    core = require("../src/NuQCore.js"),
    _ = require('util'),
    repositoryInstance;

function getSuite() {
	var suite = {};
	suite['Testing a custom instance of Repository'] = {
        topic: function(){
        	getRepositoryInstance(this.callback);
        	}, 
        'instanceof NuQRepository': function(err,topic) {
//	        	console.log(topic);
        	assert.ok((topic instanceof core.Repository),'topic is not instanceOf NuQRepository');
        }
	};
	return suite;
};
function setRepositoryInstance(repository) {
	repositoryInstance = repository;
}

//repositoryInstance must be set in custom implementation test suite
function getRepositoryInstance(callback, err) {
	callback(err, repositoryInstance);
}
exports.setRepositoryInstance = setRepositoryInstance;
function implSuite(instance) {
	var context = {
	        topic: context.instance,
	        'instanceof NuQRepository': function(topic) {
//	        	console.log(instance);
	        	assert.ok((topic instanceof core.Repository),'topic is not instanceOf NuQRepository');
	        }
	    };
		context.instance = instance;
	    return context;
}
exports.implSuite = implSuite;
exports.getSuite = getSuite;