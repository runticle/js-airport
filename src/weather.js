function Weather () {
  this.isStormy = false
}

Weather.prototype.weatherCalc = function () {
  chance = Math.random()

  if (chance < 0.2) {
    this.isStormy = true
  }
}

module.exports = Weather
