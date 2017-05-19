module.exports = {
	toRadians: function(angle) {
		return angle * (Math.PI / 180);
	},

	toDegrees: function(radians) {
		return radians * (180 / Math.PI);
	},

	round: function(number, decimals) {
		decimals = decimals || 5;
		return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
	},

	sin: function(degrees) {
		return this.round(Math.sin(this.toRadians(degrees)));
	},

	cos: function(degrees) {
		return this.round(Math.cos(this.toRadians(degrees)));
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
		var cos = this.cos(theta * -1);
		var sin = this.sin(theta * -1);

		var x = v[0] * cos - v[1] * sin;
		var y = v[0] * sin + v[1] * cos;

		return [x, y];
	}
}
