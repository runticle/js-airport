'use strict'

var Airport = require('../src/airport.js')

describe('airport', function () {
  var plane = jasmine.createSpyObj('plane', ['takeOff', 'land'])
  //
  // spyOn(plane, '').and.returnValue(true);
  var airport

  beforeEach(function () {
    airport = new Airport()
  })

  it('can receive a plane', function () {
    airport.land(plane)
    expect(airport.hanger).toContain(plane)
  })

  it('can take off a plane', function () {
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.hanger).not.toContain(plane)
  })

  describe('airport capacity', function () {
    it('has a default capacity of 10', function () {
      expect(airport.MAX_CAPACITY).toBe(10)
    })

    it('cannot land a plane at full capacity', function () {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (i) {
        airport.land(plane)
      })
      expect(function () { airport.land(plane) }).toThrow(new Error('Too many planes!'))
    })
  })
})
