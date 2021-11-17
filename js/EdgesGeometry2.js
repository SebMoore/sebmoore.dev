( function () {

	class EdgesGeometry2 extends THREE.LineSegmentsGeometry {

		constructor( geometry ) {

			super();
			this.type = 'EdgesGeometry2';
			this.fromEdgesGeometry( new THREE.EdgesGeometry( geometry ) ); // set colors, maybe

		}

	}

	EdgesGeometry2.prototype.isEdgesGeometry2 = true;

	THREE.EdgesGeometry2 = EdgesGeometry2;

} )();
