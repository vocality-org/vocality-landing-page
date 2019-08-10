<script>
    import Footer from '../components/Footer.svelte';

    import { PerspectiveCamera, AmbientLight, Scene, WebGLRenderer } from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

    let camera, scene, renderer;
    let logo;

    setTimeout(() => {
        init();
        animate();
    }, 0);

    function init() {

        camera = new PerspectiveCamera(50);
        camera.position.z = 0.75;
        camera.position.y = 0.3;  

        scene = new Scene();

        new GLTFLoader().load(
            'assets/vocality-logo.glb',
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
        renderer.gammaOutput = true;
    }

    function animate() {
        requestAnimationFrame(animate);

        if (logo) {
            logo.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }
</script>

<style lang="scss">
    header {
        background-color: var(--body-background);
        height: var(--nav-bar-height);

        li > a {
            color: var(--text-secondary);
            font-size: var(--navbar-text-font-size);
            font-weight: 900;
            position: relative;
            transition: color 0.3s ease;

            &::after {
                content: "";
                display: block;
                position: absolute;
                height: 4px;
                width: 0;
                background-color: var(--brand-pink);
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                transition: width 0.3s ease;
            }

            &:hover, 
            &:focus {
                color: var(--text-primary);
                &::after {
                    width: 30%;
                }
            }
        }

        .close-menu {
            display: none;
        }
    }

    #side-navigation:target {
        width: 40%;
    }

    #side-navigation:target + .page-wrap {
        margin-right: 40%;

        .open-menu {
            display: none;
        }

        .close-menu {
            display: flex;
        }
    }

    .sidenav {
        width: 0; 
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        transition: width 0.3s ease;
        background-color: var(--footer-background);

        a {
            height: 48px;
            line-height: 48px;
            &:hover,
            &:focus
            {
                background-color: var(--brand-pink);
            }
        }
    }

    @media (min-width: 40em) {
        .sidenav {
            width: 0 !important;
        }

        .page-wrap {
            margin-right: 0 !important;
        }
    }

    main {
        h1 {
            font-size: var(--title-font-size);
            text-align: center;
        }

        p {
            color: var(--text-secondary);
        }

        .cta {
            height: 42px;
            width: 200px;
            background-color: var(--brand-pink);
            line-height: 42px;
            text-align: center; 
            color: var(--text-primary);
            
            &:hover, &:focus {
                background-color: #ff3f5fc5;
            }
        }

        .divider {
            margin: 200px auto;
        }
    }

    @media (min-width:  52em) {
        h1 {
            text-align: start !important;

            .line {
                height: 4px;
                width: 55px;
                background-color: var(--text-primary);
            }
        }

        section {

            .cell {
                width: 90%;
            }

            p {
                max-width: 80%;
            }
        }
    }

    // THREE
    // -------------------------------------------
    .three-container {
        height: 100%;

        * {
            height: 80%;
            width: 80%;
        }
    }
</style>


<nav id="side-navigation" class="sidenav show-on-sm">
    <ul class="list-reset flex-column">
        <li>
            <a href="commands" class="text-decoration-none block h-100 pl2">Commands</a>
        </li>
        <li>
            <a href="faq" class="text-decoration-none block h-100 pl2">FAQ</a>
        </li>
        <li>
            <a href="about" class="text-decoration-none block h-100 pl2">About</a>
        </li>
    </ul>
</nav>

<div class="page-wrap">
    <header class="flex py1 px3">
        <div class="icon flex">
            <img src="assets/logo.svg" alt="vocality-logo" class="my-auto">
        </div>
        <div class="flex-auto"></div>
        <nav class="hide-on-sm">
            <ul class="list-reset flex items-center m0 h-100">
                <li>
                    <a href="commands" class="text-decoration-none px3">Commands</a>
                </li>
                <li>
                    <a href="faq" class="text-decoration-none px3">FAQ</a>
                </li>
                <li>
                    <a href="about" class="text-decoration-none px3">About</a>
                </li>
            </ul>
        </nav>
        <div class="show-on-sm">
            <a href="#side-navigation" class="open-menu h-100 icon flex">
                <img src="assets/menu.svg" alt="open menu" class="my-auto">
            </a>
            <a href="#" class="close-menu h-100 icon flex">
                <img src="assets/close.svg" alt="close menu" class="my-auto">
            </a>
        </div>
    </header>

    <main>
        <article class="pt2">
            <div class="clearfix">
                <div class="sm-col sm-col-2 op1">_</div>
                <div class="sm-col sm-col-8">
                    <div class="clearfix mx2 px3 mb4 mt3">
                        <div class="md-col md-col-6">
                            <h1 class="regular">
                                Vocality
                                <div class="line mt1"></div>
                            </h1>
                            <p class="h5 md-col-9 m0 mb1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                                libero. Sed cursus ante dapibus
                                diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                Praesent mauris.
                            </p>
                            <a class="cta h3 bold text-decoration-none mt4 inline-block" target="_blank"
                                href="https://discordapp.com/api/oauth2/authorize?client_id=589595189631385602&permissions=3164224&scope=bot">
                                Invite Vocality
                            </a>
                        </div>
                        <div class="md-col md-col-6">
                            <div class="three-container flex justify-center">
                                <canvas id="three-canvas"></canvas>
                                <div class="t"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm-col sm-col-2 op1">_</div>
            </div>

            <div class="divider flex justify-center">
                <svg width="259" height="11" viewBox="0 0 259 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.33 0.51001H0V10.51H86.33V0.51001Z" fill="#FF3F60" />
                    <path d="M172.66 0.51001H86.3301V10.51H172.66V0.51001Z" fill="#0C003F" />
                    <path d="M259 0.51001H172.67V10.51H259V0.51001Z" fill="#29ABE2" />
                </svg>
            </div>

            <div class="clearfix pt2 justify-center">
                <div class="sm-col sm-col-2 op1">_</div>
                <section class="sm-col sm-col-8 px3">
                    <h2 class="h2">This is a section heading</h2>
                    <div class="clearfix mt4">
                        <div class="md-col md-col-6 my4">
                            <div class="cell">
                                <h3 class="h4">This is a paragraph heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut
                                    aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div class="md-col md-col-6 my4">
                            <div class="cell ml-auto">
                                <h3 class="h4">This is a paragraph heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut
                                    aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div class="md-col md-col-6 my4">
                            <div class="cell">
                                <h3 class="h4">This is a paragraph heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut
                                    aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div class="md-col md-col-6 my4">
                            <div class="cell ml-auto">
                                <h3 class="h4">This is a paragraph heading</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut
                                    aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="sm-col sm-col-2 op1">_</div>
            </div>

        </article>
    </main>

    <Footer />
</div>