'use strict'
/**
 * The `tonal` module is a facade to all the rest of the modules. They are namespaced,
 * so for example to use `pc` function from `tonal-note` you have to write:
 * `tonal.note.pc`
 *
 * Some modules are NOT namespaced for developer comfort:
 *
 * - `tonal-array`: for example `tonal.map(tonal.note.pc, 'C#2')`
 * - `tonal-transpose`: for example `tonal.transpose('C', '3M')`
 * - `tonal-distance`: for example `tonal.interval('C3', 'G4')`
 *
 * It also adds a couple of function aliases:
 *
 * - `tonal.scale` is an alias for `tonal.scale.get`
 * - `tonal.chord` is an alias for `tonal.chord.get`
 *
 * @example
 * var tonal = require('tonal')
 * tonal.transpose(tonal.note.pc('C#2'), 'M3') // => 'E#'
 * tonal.chord('Dmaj7') // => ['D', 'F#', 'A', 'C#']
 *
 * @module tonal
 */

var assign = Object.assign
var tonal = {}

assign(tonal, require('tonal-array'))
assign(tonal, require('tonal-transpose'))
assign(tonal, require('tonal-distance'))

tonal.note = require('tonal-note')
tonal.ivl = require('tonal-interval')
tonal.midi = require('tonal-midi')
tonal.freq = require('tonal-freq')
tonal.range = require('tonal-range')

tonal.scale = function (name) { return tonal.scale.get(name) }
assign(tonal.scale, require('tonal-scale'))
tonal.chord = function (name) { return tonal.chord.get(name) }
assign(tonal.chord, require('tonal-chord'))

tonal.pitch = require('tonal-pitch')
tonal.notation = require('tonal-notation')
tonal.progression = require('tonal-progression')
tonal.sonority = require('tonal-sonority')

if (typeof module === 'object' && module.exports) module.exports = tonal
if (typeof window !== 'undefined') window.Tonal = tonal
