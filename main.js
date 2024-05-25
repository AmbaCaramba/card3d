import * as THREE from './three.module.js';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
// Create the card geometry and material
const textureloader = new THREE.TextureLoader();
const cardGeometry = new THREE.BoxGeometry( 3, 5, 0.05);
const cardMaterial = [new THREE.MeshBasicMaterial( {
  color: 'white',
} ),
new THREE.MeshBasicMaterial( {
  color: 'white',
} ),
new THREE.MeshBasicMaterial( {
  color: 'white',
  //wireframe: true
  // map: textureloader.load('./images/card.jpg'),
} ),
new THREE.MeshBasicMaterial( {
  color: 'white',
  //wireframe: true
  // map: textureloader.load('./images/card.jpg'),
} ),
new THREE.MeshBasicMaterial( {
  color: 'white',
  //wireframe: true
  // map: textureloader.load('./images/card.jpg'),
} ),
new THREE.MeshBasicMaterial( {
  // color: 'purple',
  //wireframe: true
  map: textureloader.load('./card.jpg'),
} ),
];

// Create the card mesh and add it to the scene
const cardMesh = new THREE.Mesh( cardGeometry, cardMaterial );
cardMesh.position.set( 0, 0, 0 );
cardMesh.rotation.y = Math.PI / 2; // rotate the card to stand upright
scene.add( cardMesh );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );
camera.position.z =5;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.canvas'),
  antialias: false
});
renderer.setSize( window.innerWidth, window.innerHeight );

// Add a light source
const light = new THREE.DirectionalLight( 0xffaffa, 1 );
scene.add( light );

const raycaster = new THREE.Raycaster();
const handleClick = (event) => {
  const pointer = new THREE.Vector2();
  pointer.x = (event.clientX / window.innerWidth) *2 -1;
  pointer.y = -(event.clientX / window.innerHeight) *2 +1;
  raycaster.setFromCamera(pointer, camera);
  const intersections = raycaster.intersectObjects([cardMesh]);

  for(let i =0; i< intersections.length;i+=1){
    intersections[i].object.material[4].color.set('purple');
  }
};

window.addEventListener('click', handleClick);


// Create the animation function
function animate() {
  requestAnimationFrame( animate );

  // Rotate the card vertically
  cardMesh.rotation.y += 0.01;

  renderer.render( scene, camera );
}

// Start the animation
animate();
