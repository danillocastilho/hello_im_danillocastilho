function BackgroundView () {
	this.scene;
	this.camera;
	this.renderer;
	this.root;
	this.inited = false;

	this.linesMesh;

    this.init = function () {
    	this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 );

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.root = new THREE.Group();
		this.scene.add(this.root);

		var self = this;
		function render () {
			requestAnimationFrame( render );
			self.renderer.render( self.scene, self.camera );

			if(self.inited){
				self.render();
			}
		}

		this.camera.position.z = 100;
		render();

		document.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
    };

  	this.onDocumentMouseMove = function (event) {
	    var windowHalfX = window.innerWidth / 2;
	    var windowHalfY = window.innerHeight / 2;
	    this.mouseX = ( event.clientX - windowHalfX ) * 10;
	    this.mouseY = ( event.clientY - windowHalfY ) * 10;
	};

    this.createTest = function () {
    	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
		var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
		var cube = new THREE.Mesh( geometry, material );
		this.root.add( cube );
    };

    this.render = function () {
		  var vertexpos = 0;
		  var colorpos = 0;
		  var numConnected = 0;

		  for ( var i = 0; i < this.particleCount; i++ ){
		    this.particlesData[ i ].numConnections = 0;

		    for ( var i = 0; i < this.particleCount; i++ ) {
		      var particleData = this.particlesData[i];

		      this.particlePositions[ i * 3     ] += particleData.velocity.x;
		      this.particlePositions[ i * 3 + 1 ] += particleData.velocity.y;
		      this.particlePositions[ i * 3 + 2 ] += particleData.velocity.z;

		      if ( this.particlePositions[ i * 3 + 1 ] < -this.rHalf || this.particlePositions[ i * 3 + 1 ] > this.rHalf )
		        particleData.velocity.y = -particleData.velocity.y;

		      if ( this.particlePositions[ i * 3 ] < -this.rHalf || this.particlePositions[ i * 3 ] > this.rHalf )
		        particleData.velocity.x = -particleData.velocity.x;

		      if ( this.particlePositions[ i * 3 + 2 ] < -this.rHalf || this.particlePositions[ i * 3 + 2 ] > this.rHalf )
		        particleData.velocity.z = -particleData.velocity.z;

		      if ( this.effectController.limitConnections && particleData.numConnections >= this.effectController.maxConnections )
		        continue;

		      for ( var j = i + 1; j < this.particleCount; j++ ) {
		        
		        var particleDataB = this.particlesData[ j ];
		        if ( this.effectController.limitConnections && particleDataB.numConnections >= this.effectController.maxConnections )
		          continue;

		        var dx = this.particlePositions[ i * 3     ] - this.particlePositions[ j * 3     ];
		        var dy = this.particlePositions[ i * 3 + 1 ] - this.particlePositions[ j * 3 + 1 ];
		        var dz = this.particlePositions[ i * 3 + 2 ] - this.particlePositions[ j * 3 + 2 ];
		        var dist = Math.sqrt( dx * dx + dy * dy + dz * dz );

		        if ( dist < this.effectController.minDistance ) {
		          
		          particleData.numConnections++;
		          particleDataB.numConnections++;

		          var alpha = 1.0 - dist / this.effectController.minDistance;
		          
		          this.positions[ vertexpos++ ] = this.particlePositions[ i * 3     ];
		          this.positions[ vertexpos++ ] = this.particlePositions[ i * 3 + 1 ];
		          this.positions[ vertexpos++ ] = this.particlePositions[ i * 3 + 2 ];

		          this.positions[ vertexpos++ ] = this.particlePositions[ j * 3     ];
		          this.positions[ vertexpos++ ] = this.particlePositions[ j * 3 + 1 ];
		          this.positions[ vertexpos++ ] = this.particlePositions[ j * 3 + 2 ];

		          this.colors[ colorpos++ ] = alpha;
		          this.colors[ colorpos++ ] = alpha;
		          this.colors[ colorpos++ ] = alpha;

		          this.colors[ colorpos++ ] = alpha;
		          this.colors[ colorpos++ ] = alpha;
		          this.colors[ colorpos++ ] = alpha;

		          numConnected++;
		        }
		        
		      }
		    }
		  }

		  this.linesMesh.geometry.groups[ 0 ].count = numConnected * 2;
		  this.linesMesh.geometry.attributes.position.needsUpdate = true;
		  this.linesMesh.geometry.attributes.color.needsUpdate = true;

		  this.pointCloud.geometry.attributes.position.needsUpdate = true;

		  this.root.rotation.x += 0.001;
		  this.root.rotation.y += 0.002;
    };

    this.createParticles = function () {
    	this.particlesData = [];
		this.maxParticleCount = 500;
		this.particleCount = 500;
		this.r = 3000;
		this.rHalf = this.r / 2;
		this.positions;
		this.colors;

		this.effectController = {
			showDots: true,
			showLines: true,
			minDistance: 200,
			limitConnections: false,
			maxConnections: 10,
			particleCount: 100
		}

		this.segments = this.maxParticleCount * this.maxParticleCount;

		this.positions = new Float32Array( this.segments * 3 );
		this.colors = new Float32Array( this.segments * 3 );

		this.pMaterial = new THREE.PointsMaterial( {
			color: 0xffffff,
			size: 1,
			transparent: true,
			sizeAttenuation: false
		} );

		this.particles = new THREE.BufferGeometry();
		this.particlePositions = new Float32Array( this.maxParticleCount * 3 );

		for ( var i = 0; i < this.maxParticleCount; i++ ) {

		var x = Math.random() * this.r - this.r / 2;
		var y = Math.random() * this.r - this.r / 2;
		var z = Math.random() * this.r - this.r / 2;

		this.particlePositions[ i * 3     ] = x;
		this.particlePositions[ i * 3 + 1 ] = y;
		this.particlePositions[ i * 3 + 2 ] = z;

		this.particlesData.push( {
		  velocity: new THREE.Vector3( -1 + Math.random() * 2, -1 + Math.random() * 2,  -1 + Math.random() * 2 ),
		  numConnections: 0
		} );

		}

		this.particles.groups.push( {
		start: 0,
		count: this.particleCount,
		index: 0
		} );

		this.particles.addAttribute( 'position', new THREE.BufferAttribute( this.particlePositions, 3 ) );

		// create the particle system
		this.pointCloud = new THREE.Points( this.particles, this.pMaterial );
		this.root.add( this.pointCloud );

		this.geometry = new THREE.BufferGeometry();

		this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
		this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );


		this.geometry.computeBoundingSphere();

		this.geometry.groups.push( {
			start: 0,
			count: 0,
			index: 0
		} );

		this.material = new THREE.LineBasicMaterial( {
			transparent: true,
			color: 0xffffff
		} );
		this.material.opacity = 0.2;

		this.linesMesh = new THREE.Line( this.geometry, this.material, THREE.LineSegments );
		this.root.add( this.linesMesh );

		this.inited = true;
    }
}