/**
 * This is an example of how to inject NuQ API tests in the testSuite of your implementation :
 */
var Repository,
	core = require("./src/NuQCore.js"),
	vows = require('vows'),
	assert = require('assert'),
	repositorySuite,
	_ = require('util')
	,nuqtests = require('./test/RepositoryImplTest.js');

function Repository(callback) {
	callback(undefined, this);
}
_.inherits(Repository,core.Repository);
repositorySuite = vows.describe('Example impl Nu-Q test');
repositorySuite.addBatch({
	"Testing new Repository": {
		topic: function() {
			new Repository(this.callback);
		},
		"Can get the repository": function(err, repo) {
			// sets the instance to test
			nuqtests.setRepositoryInstance(repo);
			if (err !== null) {
				_.log(err);
			}
			assert.ok(err === null, "An error was thrown");
		}
	}
});

// gets the API test suite and add it AFTER nuqtests.setRepositoryInstance
repositorySuite.addBatch(nuqtests.getSuite());
exports.repositorySuite = repositorySuite;