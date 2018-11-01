var Weather = require('../src/weather.js')

describe('Weather:', function () {
  var weather

  beforeEach(function () {
    weather = new Weather()
  })

  it('can be stormy', function () {
    spyOn(Math, 'random').and.returnValue(0.1)
    weather.weatherCalc()
    expect(weather.isStormy).toBe(true)
  })

  it('can be calm', function () {
    spyOn(Math, 'random').and.returnValue(0.6)
    weather.weatherCalc()
    expect(weather.isStormy).toBe(false)
  })
})
