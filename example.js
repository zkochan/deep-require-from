'use strict'
const deepRequireFrom = require('.')

const pkg = deepRequireFrom(__dirname, ['mos', 'chalk', './package.json'])

console.log(pkg.name)
