import 'purecss';
import { PerspectiveCamera, AmbientLight, Scene, WebGLRenderer, ConeGeometry } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
//import { Scene } from 'three/src/scenes/Scene';
//import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';

let camera, scene, renderer;
let logo;

init();
animate();

function init() {

    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight);
    camera.position.z = 1;

    scene = new Scene();

    let light = new AmbientLight("#ffffff", 100);
    scene.add(light);

    new GLTFLoader().load(
        'vocality-logo.glb',
        (gltf) => {

            logo = gltf.scene;

            logo.scale.x = 5;
            logo.scale.y = 5;
            logo.scale.z = 5;

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
    //document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    if (logo) {
        logo.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
