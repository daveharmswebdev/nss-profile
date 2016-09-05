'use strict'

const initilaize = require('./init')

module.exports = function($scope, initilaize) {

const init = initilaize()

	$scope.navItems=[
		{
      name: "About",
      url: "#/about"
    },
		{
      name: "Projects",
      url: "#/projects"
    },
		{
      name: "Blog",
      url: "#/blog"
    },
		{
			name: "Contact",
      url: "#/contact"
		}
	];
};