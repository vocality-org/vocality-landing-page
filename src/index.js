import { PerspectiveCamera, AmbientLight, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
//import { Scene } from 'three/src/scenes/Scene';
//import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';

let camera, scene, renderer;
let logo;

init();
animate();

function init() {

    camera = new PerspectiveCamera(50);
    camera.position.z = 0.75;
    camera.position.y = 0.3;  

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

    renderer = new WebGLRenderer({ 
        canvas: document.getElementById('three-canvas') 
    });
    renderer.setSize(500, 500, false);
    renderer.setClearColor('#121212', 1);
}

function animate() {
    requestAnimationFrame(animate);

    if (logo) {
        logo.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
