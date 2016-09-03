'use strict'

const app = require('angular').module('profile')

app.controller('splashController', require('./splash'))
app.controller('navController', require('./navController'))
app.controller('blogController', require('./blogController'))
app.controller('contactController', require('./contactController'))
app.controller('aboutController', require('./aboutController'))
app.controller('projectsController', require('./projectsController'))
