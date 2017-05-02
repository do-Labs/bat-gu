module.exports = {
	toRadians: function(angle) {
		return angle * (Math.PI / 180);
	},

	toDegrees: function(radians) {
		return radians * (180 / Math.PI);
	},

	vInvert: function(v) {
		return v.map(function(member) {
			return member * -1;
		});
	},

	vAdd: function(v1, v2) {
		return v1.map(function(member, index) {
			return v1[index] + v2[index];
		})
	},

	vSubstract: function(v1, v2) {
		return v1.map(function(member, index) {
			return v1[index] - v2[index];
		})
	},

	dotProduct: function(v1, v2) {
		return v1.map(function(member, index) {
			return v1[index] * v2[index];
		}).reduce(function(m,n) { return m + n; });
	},

	magnitude: function(v) {
		return Math.sqrt(v.reduce(function(a, b) { return a + b }));
	},

	rotate: function(v, theta) {
		var rTheta = this.toRadians(theta);
		var cos = Math.cos(rTheta);
		var sin = Math.sin(rTheta);

		var x = v[0] * cos - v[1] * sin;
		var y = v[0] * sin + v[1] * cos;

		return [x, y];
	}
}
