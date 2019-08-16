<template>
    <div class="index my0 mx-auto">
        <section class="three">
            <div id="container" class="container">

            </div>
        </section>
        <section class="header flex">
            <div class="content">
                <h1>Vocality</h1>
                <p class="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                    Praesent mauris.
                </p>
                <a
                    class="cta h3 bold text-decoration-none mt4 inline-block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://discordapp.com/api/oauth2/authorize?client_id=589595189631385602&permissions=3164224&scope=bot"
                >Invite Vocality</a>
            </div>
        </section>
        <div style="height: 10000px; width: 10px; background-color: blue"></div>
    </div>
</template>

<script>
    import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

    export default {
        name: 'index',
        data () {
            return {
                ww: window.innerWidth,
                wh: window.innerHeight,
                camera: null,
                scene: null,
                renderer: null,
                mesh: null,
                logo: null,
                rotation: -1
            }
        },
        methods: {
            init: function () {
                let container = document.getElementById('container')

                this.camera = new PerspectiveCamera(50, this.ww / this.wh)
                this.camera.position.z = 0.75
                this.camera.position.y = 0.3

                this.scene = new Scene()

                new GLTFLoader().load(
                    ('vocality-logo.glb'),
                    (gltf) => {
                        this.logo = gltf.scene
                        this.logo.scale.set(4.5, 4.5, 4.5)
                        this.logo.position.set(0.28, 0.05, 0)
                        this.scene.add(this.logo)
                    },
                    (xhr) => {
                        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
                    },
                    (error) => {
                        console.log(error)
                    }
                )

                this.renderer = new WebGLRenderer({ antialias: true })
                this.renderer.setClearColor('#121212', 1)
                this.renderer.gammaOutput = true
                this.renderer.setSize(this.ww, this.wh)
                container.appendChild(this.renderer.domElement)
            },
            animate: function () {
                requestAnimationFrame(this.animate)
                if (this.logo) {
                    if (this.logo.rotation.y > 0.45) {
                        this.rotation = -1
                    }
                    else if (this.logo.rotation.y < -0.65) {
                        this.rotation = 1
                    }
                    this.logo.rotation.y += 0.001 * this.rotation;
                }
                this.renderer.render(this.scene, this.camera)
            },
            onResize: function () {
                if (this.renderer && this.camera) {
                    const ww = window.innerWidth
                    const wh = window.innerHeight
                    this.renderer.setSize(ww, wh)
                    this.camera.aspect = ww / wh
                    this.camera.updateProjectionMatrix()
                }
            }
        },
        mounted () {
            this.init()
            this.animate()
        },
        created: function () {
            window.addEventListener('resize', this.onResize)
        },
        destroyed: function () {
            window.removeEventListener('resize', this.onResize)
        }
    }

</script>

<style lang="scss" scoped>
.index {
    max-width: 1040px;
    position: relative;
}
.three {
    position: relative;
    max-width: 100%;
    overflow-x: hidden;
    z-index: 1;
    .container {
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        cursor: grab;
        display: flex;
        justify-content: flex-end;
    }
}
.header {
    z-index: 1;
    padding: 120px 20px 0px;
    position: relative;
    pointer-events: none;
    min-height: 100vh;
    .content {
        flex-basis: 100%;
        @include mq(md) {
            flex-basis: 60%;
        }
        h1 {
            font-size: 64px;
            max-width: 300px;
            pointer-events: auto;
            @include mq(sm) {
                font-size: 92px;
            }
        }
        p {
            max-width: 440px;
            pointer-events: auto;
            line-height: 1.9rem;
        }
        .cta {
            height: 52px;
            line-height: 52px;
            width: 240px;
            text-align: center;
            pointer-events: auto;
            box-shadow: 0 4px 6px rgba(97, 97, 97, 0.1), 0 1px 3px rgba(190, 190, 190, 0.08);
            background-image: linear-gradient(
                90deg,
                clr(brand, blue) 0%,
                clr(brand, cyan) 50%,
                clr(brand, pink) 100%
            );
            background-size: 400%;
            animation-duration: 3s;
            animation-name: changeBackgroundPos;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-play-state: paused;

            &:hover,
            &:focus {
                animation-play-state: running;
                transform: translateY(-2px);
                box-shadow: 0 7px 14px rgba(97, 97, 97, 0.1), 0 3px 6px rgba(190, 190, 190, 0.08);
            }

            @keyframes changeBackgroundPos {
                from {
                    background-position: right;
                }

                to {
                    background-position: left;
                }
            }
        }
    }
}
</style>
