'use strict'

var Plane = require('../src/plane.js')

describe('plane', function () {
  var airport = jasmine.createSpyObj('airport', ['', 'land'])
  // spyOn(plane, '').and.returnValue(true);
  var plane

  beforeEach(function () {
    plane = new Plane()
  })

  it('lands on the ground', function () {
    plane.land()
    expect(plane.flying).toBe(false)
  })

  it('can take off', function () {
    plane.land()
    plane.takeOff()
    expect(plane.flying).toBe(true)
  })
})
