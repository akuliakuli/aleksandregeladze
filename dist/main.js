import 'style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // Setup

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3);

// renderer.render(scene, camera);

// const geometry = new THREE.SphereGeometry( 16, 21, 16 );
// const material = new THREE.MeshToonMaterial( { color: '#049ef4' } );
// const sphere = new THREE.Mesh( geometry, material );


// scene.add( sphere );

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(25,15,15)

// scene.add(pointLight)


// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(100).fill().forEach(addStar);

// const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture

// const meTexture  = new THREE.TextureLoader().load("me.jpg");

// const me = new THREE.Mesh(
//   new THREE.BoxGeometry(3,3,3),
//   new THREE.MeshBasicMaterial({map:meTexture})
// )

// scene.add(me);

// const omicronTexture = new THREE.TextureLoader().load('omicronpersei8.jpg');

// const omicronPersei = new THREE.Mesh(
//   new THREE.SphereGeometry(3,32,32),
//   new THREE.MeshStandardMaterial({map:omicronTexture})
// )

// omicronPersei.position.z = 30;
// omicronPersei.position.setX(-10)

// me.position.z = -5;
// me.position.x = 2;

// function moveCamera(){
//   const t = document.body.getBoundingClientRect().top;
//   omicronPersei.rotation.x += 0.05;
//   omicronPersei.rotation.y += 0.075;
//   omicronPersei.rotation.z += 0.05;

//   me.rotation.y += 0.01;
//   me.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

// function animate(){
//   requestAnimationFrame(animate);

//   sphere.rotation.x += 0.01;
//   sphere.rotation.y += 0.005;
//   sphere.rotation.z += 0.01;
  
//   controls.update()

//   renderer.render(scene,camera)
// }
// animate()
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);



const geometry = new THREE.SphereGeometry( 16, 15, 16 );
const material = new THREE.MeshToonMaterial( { color: '#364958' } );
const sphere = new THREE.Mesh( geometry, material );

scene.add(sphere);



const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);


const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;



const meTexture = new THREE.TextureLoader().load('me.png');

const me = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: meTexture }));

scene.add(me);



const omicronTexture = new THREE.TextureLoader().load('omicronpersei8.jpg');

const omicron = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: omicronTexture,
  })
);

scene.add(omicron);



omicron.position.z = 30;
omicron.position.setX(-10);

me.position.z = -5;
me.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  omicron.rotation.x += 0.05;
  omicron.rotation.y += 0.075;
  omicron.rotation.z += 0.05;



  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();


function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.01;



  omicron.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();