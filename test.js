'use strict'
const test = require('tape')
const deepRequireFrom = require('.')

test('deepRequireFrom()', t => {
  const pkg = deepRequireFrom(process.cwd(), ['mos', 'chalk', './package.json'])
  t.equal(pkg.name, 'chalk')

  t.throws(() => deepRequireFrom(process.cwd(), ['nonexistent']), Error)

  t.end()
})

test('deepRequireFrom.silent()', t => {
  const pkg = deepRequireFrom.silent(process.cwd(), ['mos', 'chalk', './package.json'])
  t.equal(pkg.name, 'chalk')

  t.equal(deepRequireFrom.silent(process.cwd(), ['nonexistent', './package.json']), null)

  t.end()
})
