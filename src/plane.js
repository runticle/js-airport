function Plane () {
  this.flying = true
}

Plane.prototype.land = function () {
  this.flying = false
}

module.exports = Plane
