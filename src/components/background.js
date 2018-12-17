import * as THREE from 'three';
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'

let mtlLoader = new MTLLoader();
let objLoader = new OBJLoader();

var container;

var camera, scene, renderer;

var group, objects = [];

var kutiList = [
  'kuti_giraffe',
  'kuti_goldfish',
  'kuti_lizard',
  'kuti_monkey',
  'kuti_pig',
  'kuti_snake2'
];

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init();
animate();

function init() {
  container = document.createElement( 'div' );
  container.id = "stage3d";
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 95, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.z = 25;

  scene = new THREE.Scene();


  var ambientLight = new THREE.AmbientLight( 0xcccccc, 1 );
  scene.add( ambientLight );

  var pointLight = new THREE.PointLight( 0xffffff, 1 );
  camera.add( pointLight );

  var directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1).normalize();
  directionalLight.intensity = 1;
  scene.add(directionalLight);
  scene.add( camera );

  loadAllKutis();
  renderKutis();
  
  group = new THREE.Object3D();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.sortObjects = false;
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
  windowHalfX = window.innerWidth / 4;
  windowHalfY = window.innerHeight / 4;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove(event) {
  mouseX = ( event.clientX - windowHalfX ) * 2;
  mouseY = ( event.clientY - windowHalfY ) * 2;
}

//

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  camera.position.x += ( mouseX - camera.position.x ) * .0008;
  camera.position.y += ( - mouseY - camera.position.y ) * .0008;

  camera.lookAt( scene.position );

  var currentSeconds = Date.now();
  group.rotation.x = Math.sin( currentSeconds * 0.0007 ) * 0.5;
  group.rotation.y = Math.sin( currentSeconds * 0.0003 ) * 0.5;
  group.rotation.z = Math.sin( currentSeconds * 0.0002 ) * 0.5;

  renderer.render( scene, camera );
} 



function loadAllKutis() {
  var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
    }
  };
  var onError = function () {
    console.log('Error encountered while loading kuti');
  };

  kutiList.forEach(kuti => {
    mtlLoader.load( `kuti_animals/${kuti}.mtl`, function ( materials ) {
      materials.preload();
      
      objLoader.setMaterials( materials )
        .load( `kuti_animals/${kuti}.obj`, function ( object ) {
          objects.push(object);
        }, onProgress, onError );
    } );
  })
}

function renderKutis() {
  if(objects.length < kutiList.length) {
    setTimeout(() => {
      renderKutis();
    }, 100);
  }
  else {  
    for ( var i = 0; i < 20; i ++ ) {
      var randomIndex = Math.floor(Math.random() * kutiList.length)
      var instance = objects[randomIndex].clone();
      /* All objects became same color
      instance.traverse(child => {
        if (child instanceof THREE.Mesh) {
          var color = new THREE.Color( 0xffffff );
          color.setHex( Math.random() * 0xffffff );
          child.material.color = color;
        }
      });
      */
      instance.position.x = Math.random() * 150 - 75;
      instance.position.y = Math.random() * 150 - 75;
      instance.position.z = Math.random() * 150 - 75;
      instance.rotation.x = Math.random() * 2 * Math.PI;
      instance.rotation.y = Math.random() * 2 * Math.PI;
      instance.opacity = 50;
      instance.matrixAutoUpdate = false;
      instance.updateMatrix();
      group.add( instance );
    }
    scene.add(group);
  }
}
