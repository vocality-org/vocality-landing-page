import 'purecss';
import { PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
//import { Scene } from 'three/src/scenes/Scene';
//import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';

let camera, scene, renderer;
let logo;

init();
animate();

function init() {

    camera = new PerspectiveCamera();
    camera.position.z = 1;
    camera.position.y = 0.25;  

    scene = new Scene();

    new GLTFLoader().load(
        'vocality-logo.glb',
        (gltf) => {
            logo = gltf.scene;
            logo.scale.set(5, 5, 5);
            scene.add(logo);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.log(error);
        }
    )

    renderer = new WebGLRenderer({ canvas: document.getElementById('three-canvas') });
    renderer.setSize(500, 500);
    renderer.setClearColor(0x252525, 1);
}

function animate() {
    requestAnimationFrame(animate);

    if (logo) {
        logo.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
