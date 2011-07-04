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
    core = require("../NoCR.js"),
    _ = require('util'),
    repositoryInstance;

function getSuite() {
	return suite = {
		'[Nu-Q] Testing a custom instance of Repository':{
	        topic: function(){
	        	getRepositoryAsync(this.callback);
	        	}, 
	        'instanceof NuQRepository': function(err,repo) {
//			        	console.log(topic);
	        	assert.ok((repo instanceof core.Repository),'result is not instanceOf NuQRepository');
	        }
		},
		'[Nu-Q] Testing anonymous login': {
			topic: function(){
				getRepository().login(null, "testWorkSpace",this.callback);
			},
			'Test Session object' : function(err,session){
				assert.ok((session instanceof core.Session),'Session is not a session object');
			}
		}
	};
};

function getRepository() {
	return repositoryInstance;
}

function setRepository(repository) {
	repositoryInstance = repository;
}

//repositoryInstance must be set in custom implementation test suite
function getRepositoryAsync(callback, err) {
	callback(err, repositoryInstance);
}

exports.setRepository = setRepository;
exports.getRepository = getRepository;
exports.getSuite = getSuite;