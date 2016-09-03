'use strict'

const app = require('angular').module('profile')

app.controller('splashController', require('./splash'))
app.controller('navController', require('./navController'))
app.controller('blogController', require('./blog'))
app.controller('contactController', require('./contact'))
app.controller('aboutController', require('./about'))
app.controller('projectsController', require('./projects'))
