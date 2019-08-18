<template>
    <div class="index">
        <section class="three z1 relative">
            <div id="container" class="container fixed flex justify-end">
                <!--canvas goes here-->
            </div>
        </section>
        <section class="header flex max-mid my0 mx-auto z1 relative">
            <div class="header-content">
                <h1>Vocality</h1>
                <p class="h4">
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
        <section class="main relative flex">
            <div class="main-content max-mid my0 mx-auto w-100 z2 mt4">
                <h2 class="h2">This is a section header</h2>
                <div class="paragraph-grid mt4 pt3 h5">
                    <div>
                        <h3 class="h4">Paragraph header</h3>
                        <p>Repellat neque sint enim accusamus molestiae. Quidem aut aut sit iusto harum et. Vero minus illum consequatur cumque. CoQuidem aut aut sit iusto harum et.CoQuidem aut aut sit iusto harum et.</p>
                    </div>
                    <div>
                        <h3 class="h4">Paragraph header</h3>                    
                        <p>Repudiandae atque voluptatem quis at sequi. CoQuidem aut aut sit iusto harum et. Vero minus illum consequatur cumque.CoQuidem aut aut sit iusto harum et.CoQuidem aut aut sit iusto harum et. CoQuidem aut aut sit iusto harum et.</p>
                    </div>
                    <div>
                        <h3 class="h4">Paragraph header</h3>
                        <p>Repellat neque sint enim accusamus molestiae. Quidem aut aut sit iusto harum et. Vero minus illum consequatur cumque. CoQuidem aut aut sit iusto harum et.</p>
                    </div>
                    <div>
                        <h3 class="h4">Paragraph header</h3>
                        <p>Repudiandae atque voluptatem quis at sequi. CoQuidem aut aut sit iusto harum et. Vero minus illum consequatur cumque. CoQuidem aut aut sit iusto harum et. CoQuidem aut aut sit iusto harum et.</p>
                    </div>      
                </div>
            </div>
            <div class="grid-stripe-container absolute z1 top-0 bottom-0 w-100">
                <div class="background-grid h-100 w-100 flex flex-column items-center absolute">
                    <div class="grid w-100 h-100">
                        <div class="stripe">
                            <div class="pink"></div>
                            <div class="blue"></div>
                            <div class="cyan"></div>
                        </div>
                        <div class="below-stripe"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="second-content">

        </section>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue';
    import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
    import updateOnSroll from 'uos'

    export default {
        name: 'index',
        data () {
            return {
                camera: null,
                scene: null,
                renderer: null,
                logo: null,
                ww: window.innerWidth,
                wh: window.innerHeight,
                rotationState: -1,
                isScrollingDown: true,
                isScrollEnabled: true,
                previousScrollPosition: 0
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
                        this.rotationState = -1
                    } else if (this.logo.rotation.y < -0.65) {
                        this.rotationState = 1
                    }
                    this.logo.rotation.y += 0.001 * this.rotationState
                }
                this.renderer.render(this.scene, this.camera)
            },
            animateOnScroll: function () {
                updateOnSroll(0, this.wh * 1.3, position => {
                    if (position === 1 && this.isScrollEnabled) {
                        document.getElementById('container').style.transform = 'translateX(100vw)'
                        this.isScrollEnabled = false
                        return
                    }

                    if (position < 1 && !this.isScrollEnabled) {
                        document.getElementById('container').style.transform = 'translateX(0px)'
                        this.isScrollEnabled = true
                    }

                    this.isScrollingDown = position >= this.previousScrollPosition
                    this.logo.rotation.y += this.isScrollingDown ? 0.05 : (-1 * 0.05)

                    if (position < 0.5) {
                        this.logo.position.x = (-1 * position + 0.28)
                    }

                    this.previousScrollPosition = position
                })
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
            this.animateOnScroll()
        },
        created: function () {
            window.addEventListener('resize', this.onResize)
        },
        destroyed: function () {
            window.removeEventListener('resize', this.onResize)
        },
        components: {
            Footer
        }
    }

</script>

<style lang="scss" scoped>
.max-mid {
    max-width: 1040px;
    position: relative;
}
.three {
    max-width: 100%;
    overflow-x: hidden;
    .container {
        right: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        cursor: grab;
    }
}
.header {
    padding: 20px 20px 0px;
    pointer-events: none;
    min-height: 100vh;
    @include mq(sm) {
        padding-top: 120px
    }
    .header-content {
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
            @include mq(sm) {
                font-size: 1.25rem;
                line-height: 1.9rem;
            }
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
.main {
    padding: 200px 0;
    margin-top: 200px;
    .main-content {
        padding: 20px 20px 0;
        margin: 100px auto 50px;
        .paragraph-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 2rem 4rem; 
            @include mq(sm) {
                grid-gap: 4rem 8rem;
            }
            p {
                max-width: 350px;
            }
        }
    }
    .grid-stripe-container {
        pointer-events: none;
        .background-grid {
            transform: skewY(-12deg);
            height: 130%;
            .grid {
                $row-height: 64px;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: $row-height 1fr;
                .stripe {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    height: $row-height + 16px;
                    .pink {
                        background-color: clr(brand, pink);
                    }
                    .blue {
                        background-color: clr(brand, blue);
                    }
                    .cyan {
                        background-color: clr(brand, cyan);
                    }
                }
                .below-stripe {
                    background-color: clr(background, secondary);
                }
                &::after {
                    content: '';
                    position: absolute;
                    top: $row-height * -1;
                    width: 100%;
                    left: 0;
                    background: linear-gradient(#00000000, #25252580);
                }
            }
        }
    }
}
.second-content {
    z-index: 1;
    position: relative;
}
</style>
