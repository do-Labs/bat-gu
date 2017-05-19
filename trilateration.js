// http://stackoverflow.com/questions/16176656/trilateration-and-locating-the-point-x-y-z

const assert = require('assert');
const math = require("./math")

var p1 = [2, 3];
var p2 = [3, 4];
var p3 = [5, 2];

function getLocation(r1, r2, r3) {
	var p1Inverted = math.vInvert(p1);

	// move our points so that p1 is on the origin
	var p1p = [0, 0];
	var p2p = math.vAdd(p2, p1Inverted);
	var p3p = math.vAdd(p3, p1Inverted);

	// rotate p2 to be on X axis [1, 0]
	var theta = Math.acos(p2p[0] / math.magnitude(p2p));

	var x = (Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(p2p[0], 2)) / (2 * p2p[0]);
	var y = (Math.pow(r1, 2) - Math.pow(r3, 2) + Math.pow(p3p[0], 2) + Math.pow(p3p[1], 2)) / ((2 * p3p[1]) - ((p3p[0] / p3p[1]) * x));

	// move the point back to the original origin
	return math.vSubstract([x, y], p1Inverted);
}

assert.deepEqual(math.vInvert([-1, 1]), [1, -1]);
assert.deepEqual(math.vAdd([-1, 1], [1, -1]), [0, 0]);
assert.equal(math.magnitude([1, 1]), Math.sqrt(2));
assert.deepEqual(math.rotate([0, 1], 90), [1, 0]);
// assert.deepEqual(getLocation(2, 2, 2), [0, 0]);
