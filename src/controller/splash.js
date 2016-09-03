'use strict'

module.exports = function($scope) {
	$scope.splash = 'splash'

	$scope.splashDisplay = function() {
		console.log('splash and more', $scope.splash)
	}
}