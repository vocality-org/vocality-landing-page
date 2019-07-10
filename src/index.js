import 'purecss';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

let camera, scene, renderer;
let logo;

init();
animate();

function init() {

    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new Scene();

    new MTLLoader()
        .load(
            'logo-material.mtl',
            (materials) => {
                materials.preload();
                new OBJLoader()
                    .setMaterials(materials)
                    .load(
                        'logo.obj',
                        (object) => {
                            object.scale.x = 2;
                            object.scale.y = 2;
                            object.scale.z = 2;
                            logo = object;
                            console.log(logo);
                            scene.add(logo);
                        },
                        (prog) => {
                            console.log(`${(prog.loaded / prog.total * 100)}% loaded`);
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
            }
        );

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);

    if (logo) {
        logo.rotation.y += 0.02;
    }

    renderer.render(scene, camera);
}
