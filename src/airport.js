function Airport () {
  this.hanger = []
  this.MAX_CAPACITY = 10
}

Airport.prototype.land = function (plane) {
  if (this.isFull()) {
    throw new Error('Too many planes!')
  }
  this.hanger.push(plane)
}

Airport.prototype.takeOff = function (plane) {
  index = this.hanger.indexOf(plane)
  this.hanger.splice(index)
}

Airport.prototype.isFull = function () {
  if (this.hanger.length === this.MAX_CAPACITY) {
    return true
  }
}

module.exports = Airport
