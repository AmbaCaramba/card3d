//import * as THREE from 'three';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
// Create the card geometry and material
const cardGeometry = new THREE.BoxGeometry( 5, 0.1, 3, 2 );
const cardMaterial = new THREE.MeshBasicMaterial( {
  color: 'purple',
  //wireframe: true
} );

// Create the card mesh and add it to the scene
const cardMesh = new THREE.Mesh( cardGeometry, cardMaterial );
cardMesh.position.set( 0, 0, 0 );
cardMesh.rotation.z = Math.PI / 2; // rotate the card to stand upright
scene.add( cardMesh );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );
camera.position.z =5;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.canvas'),
  antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );

// Add a light source
const light = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( light );


// Create the animation function
function animate() {
  requestAnimationFrame( animate );

  // Rotate the card vertically
  cardMesh.rotation.y += 0.01;

  renderer.render( scene, camera );
}

// Start the animation
animate();
