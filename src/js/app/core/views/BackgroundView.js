function BarGeometry () {
	var container = new THREE.Group();

	var geometry = new THREE.BoxGeometry( 130, 1500, 100 );
	var material = new THREE.MeshPhongMaterial({
		color: 0x000000,
		emissive: 0x000000,
		side: THREE.DoubleSide,
		shading: THREE.FlatShading
	});

	var cube = new THREE.Mesh( geometry, material );
	cube.position.y = -(1500 / 2);
	container.add( cube );

	return container;
}

function BackgroundView () {
	this.scene;
	this.camera;
	this.renderer;
	this.root;
	this.light;

    this.init = function () {
    	this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

		this.renderer = new THREE.WebGLRenderer( {antialias: true} );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.setClearColor(0xffffff, 1);
		document.body.appendChild( this.renderer.domElement );

		this.root = new THREE.Group();
		this.scene.add(this.root);

		var self = this;
		function render () {
			requestAnimationFrame( render );
			self.renderer.render( self.scene, self.camera );
			self.render();
		}

		this.camera.position.z = 500;

		document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false );

		window.addEventListener( 'resize', function () {

			self.camera.aspect = window.innerWidth / window.innerHeight;
			self.camera.updateProjectionMatrix();

			self.renderer.setSize( window.innerWidth, window.innerHeight );

		}, false );

		var ambientLight = new THREE.AmbientLight( 0xffffff );
		this.scene.add( ambientLight );

		// var light = new THREE.PointLight( 0xffffff, 5, 10000 );
		// light.position.set( 1000, 100, -2000 );
		// light.rotation.y = Math.PI;

		this.light = new THREE.PointLight( 0xDF0C37, 1000, 10000 );
		this.light.position.set( 2000, 0, 500 );
		this.light.rotation.x = Math.PI;


		this.scene.add( this.light );

		this.setup();
		render();
    };

    this.setup = function () {
    	var delay = 1;
    	var color = 0xff0000;

    	var container = new THREE.Group();

    	for ( var i = 0; i < 10; i++ ) {
    		bar = new BarGeometry();
    		bar.position.x = i * 130;
    		bar.position.y = -500;

    		TweenMax.to( bar.position, 10 + Math.random(), { y: 100 + (Math.random() * 100), delay: delay, ease: Cubic.easeOut } );
    		container.add( bar );
    		bar.position.z = -(i * 50);
    	}
    	container.position.x = -( (10 * 130) / 2 );

    	for ( var i = 0; i < 15; i++ ) {
    		bar = new BarGeometry();
    		bar.position.x = i * 130;
    		bar.position.y = -1000;
    		container.add( bar );
    		bar.position.z = -(i * 50);
    	}

    	this.root.add( container );
    };

  	this.onDocumentMouseMove = function (event) {
	    var windowHalfX = window.innerWidth / 2;
	    var windowHalfY = window.innerHeight / 2;
	    this.mouseX = ( event.clientX - windowHalfX );
	    this.mouseY = ( event.clientY - windowHalfY );

	    TweenMax.to( this.root.rotation, .6, { y: this.mouseX / 10000, x: this.mouseY / 10000 } )
	};

    this.render = function () {
		var time = Date.now() * 0.0005;

		this.light.position.x = Math.sin( time * 0.7 ) * 30;
		this.light.position.y = Math.cos( time * 0.5 ) * 40;
		this.light.position.z = Math.cos( time * 0.3 ) * 30;
    };
}