<template>
    <div class="index">
        <section class="three z1 relative">
            <div ref="container" id="container" class="container fixed flex justify-end">
                <!--canvas goes here-->
            </div>
        </section>
        <section class="header flex max-mid my0 mx-auto z1 relative">
            <div class="header-content">
                <h1 class="no-events-on-drag">Vocality</h1>
                <p class="h4 no-events-on-drag">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                    libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                    Praesent mauris.
                </p>
                <a
                    class="cta h3 bold text-decoration-none mt4 inline-block no-events-on-drag"
                    target="_blank"
                    rel="noreferrer"
                    href="https://discordapp.com/api/oauth2/authorize?client_id=589595189631385602&permissions=3164224&scope=bot"
                >Invite Vocality</a>
            </div>
        </section>
        <section class="main relative flex">
            <div class="main-content max-mid my0 mx-auto w-100 z2 mt4">
                <div class="grid flex flex-column">
                    <div>
                        <div class="sticky">
                            <h2 class="h1 m0">This is a section header</h2>
                            <p class="h3">Sunt molestiae voluptas reprehenderit suscipit rerum beatae. Assumenda et et sint voluptatem. Sequi expedita nostrum quam recusandae quisquam alias. Molestiae quaerat perferendis sunt fuga et dignissimos. Deleniti delectus dolorum corporis velit occaecati qui blanditiis. Repudiandae alias voluptatem delectus laborum ratione qui sed aut.</p>
                            <router-link to="/commands" tag="a" class="commands-link h3 flex items-center">
                                See full list of commands
                                <img src="@/assets/arrow-right.svg" alt="arrow pointing right" class="ml2">
                            </router-link>
                        </div>
                    </div>
                    <div class="scroll-side relative">
                        <div class="dotted-line h-100 absolute top-0">
                            <svg preserveAspectRatio="xMidYMin slice" width="2px" height="100%" viewBox="0 0 2 995" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M1,1 L1,1001" stroke="#f2f2f280" stroke-width="2" stroke-dasharray="2 8"></path>
                            </svg>
                        </div>
                        <section class="checklist">
                            <div class="list-icon-container">
                                <img class="list-icon" src="@/assets/youtube.svg" alt="youtube">
                            </div>
                            <div class="checklist-content pb3">
                                <h3 class="h3 m0">Youtube</h3>
                                <ul class="list-style-none m0 p0">
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something very nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something very nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="checklist">
                            <div class="list-icon-container">
                                <img class="list-icon" src="@/assets/soundcloud.svg" alt="soundcloud">
                            </div>
                            <div class="checklist-content pb3">
                                <h3 class="h3 m0">SoundCloud</h3>
                                <ul class="list-style-none m0 p0">
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something very nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something very nice
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="checklist">
                            <div class="list-icon-container">
                                <img class="list-icon" src="@/assets/spotify.svg" alt="spotify">
                            </div>
                            <div class="checklist-content pb3">
                                <h3 class="h3 m0">Spotify</h3>
                                <ul class="list-style-none m0 p0">
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="checklist">
                            <div class="list-icon-container">
                                <img class="list-icon" src="@/assets/music.svg" alt="music in general">
                            </div>
                            <div class="checklist-content pb3">
                                <h3 class="h3 m0">Music and Playlists</h3>
                                <ul class="list-style-none m0 p0">
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="checklist">
                            <div class="list-icon-container hide-points">
                                <img class="list-icon" src="@/assets/settings.svg" alt="bot settings">
                            </div>
                            <div class="checklist-content">
                                <h3 class="h3 m0">Bot Settings</h3>
                                <ul class="list-style-none m0 p0">
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                    <li class="checklist-item">
                                        <img src="@/assets/checkmark.svg" alt="checkmark" class="checkmark-icon">
                                        Something nice
                                    </li>
                                </ul>
                            </div>
                        </section>
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
            <div class="banner">
                <div class="cyan">
                    <div class="flex justify-center items-center flex-column">
                        <img src="@/assets/volume.svg" alt="volume control" height="114">
                        <h4 class="h3 mt2 mb1">Settings</h4>
                        <span class="text-center">Lorem ipsum. Itaque debitis aliquid ipsam eveniet.</span>
                    </div>
                </div>
                <div class="blue">
                    <div class="flex justify-center items-center flex-column">
                        <img src="@/assets/clock.svg" alt="clock" height="114">
                        <h4 class="h3 mt2 mb1">Settings</h4>
                        <span class="text-center">Lorem ipsum. Itaque debitis aliquid ipsam eveniet.</span>
                    </div>
                </div>
                <div class="pink">
                    <div class="flex justify-center items-center flex-column">
                        <img src="@/assets/key.svg" alt="key" height="114">
                        <h4 class="h3 mt2 mb1">Settings</h4>
                        <span class="text-center">Lorem ipsum. Itaque debitis aliquid ipsam eveniet.</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="third-content">
            <div class="donate z2 relative text-center">
                <div class="flex  flex-column justify-center items-center max-mid my0 mx-auto w-100">
                    <h2 class="h1 m0">Enter the free gift card giveaway</h2>
                    <a
                    class="cta h3 bold text-decoration-none mt4 inline-block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://discordapp.com/api/oauth2/authorize?client_id=589595189631385602&permissions=3164224&scope=bot"
                    >Donate</a>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import { PerspectiveCamera, Scene, AmbientLight, WebGLRenderer, Euler, Quaternion, AmbientLightProbe } from 'three'
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
                previousScrollPosition: 0,
                isGrabbing: false,
                previousMousePosition: {
                    x: 0,
                    y: 0
                }
            }
        },
        methods: {
            init: function () {
                let container = document.getElementById('container')

                this.camera = new PerspectiveCamera(50, this.ww / this.wh)
                this.camera.position.z = 0.75
                this.camera.position.y = 0.3

                this.scene = new Scene()

                const light = new AmbientLight('#fff', 1)
                this.scene.add(light)

                new GLTFLoader().load(
                    ('vocality-logo-3d.glb'),
                    (gltf) => {
                        this.logo = gltf.scene
                        this.logo.scale.set(4.5, 4.5, 4.5)
                        this.logo.position.set(0.3, 0.24, 0)
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
                updateOnSroll(0, this.wh * 1.5, position => {
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
            animateToInit: function () {
                // this.logo.rotation.set(0, 0, 0)
            },
            onResize: function () {
                if (this.renderer && this.camera) {
                    const ww = window.innerWidth
                    const wh = window.innerHeight
                    this.renderer.setSize(ww, wh)
                    this.camera.aspect = ww / wh
                    this.camera.updateProjectionMatrix()
                }
            },
            onCanvasMouseDown: function () {
                this.isGrabbing = true
                this.$refs.container.style.cursor = 'grabbing'
                const list = document.getElementsByClassName('no-events-on-drag')
                for (let element of list) {
                    element.style.pointerEvents = 'none'
                }
            },
            onCanvasMouseUp: function () {
                this.isGrabbing = false
                this.$refs.container.style.cursor = 'grab'
                this.animateToInit()
                const list = document.getElementsByClassName('no-events-on-drag')
                for (let element of list) {
                    element.style.pointerEvents = 'auto'
                }
            },
            onCanvasMouseMove: function (e) {
                const deltaMove = {
                    x: e.offsetX - this.previousMousePosition.x,
                    y: e.offsetY - this.previousMousePosition.y
                }

                if (this.isGrabbing) {
                    const deltaRotationQuaternion = new Quaternion()
                        .setFromEuler(new Euler(
                            this.toRadians(deltaMove.y * 0.1),
                            this.toRadians(deltaMove.x * 0.1),
                            0
                        ))
                    this.logo.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.logo.quaternion)
                }

                this.previousMousePosition = {
                    x: e.offsetX,
                    y: e.offsetY
                }
            },
            onMouseLeave: function () {
                this.isGrabbing = false
            },
            toRadians: function (angle) {
                return angle * (Math.PI / 180)
            }
        },
        mounted () {
            this.init()
            this.animate()
            this.animateOnScroll()
        },
        created: function () {
            window.addEventListener('resize', this.onResize)
            this.$nextTick(() => {
                this.$refs.container.addEventListener('mousedown', this.onCanvasMouseDown)
                this.$refs.container.addEventListener('mouseup', this.onCanvasMouseUp)
                this.$refs.container.addEventListener('mousemove', this.onCanvasMouseMove)
                window.addEventListener('mouseout', this.onMouseLeave)
            })
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.onResize)
            this.$refs.container.removeEventListener('mousedown', this.onCanvasMouseDown)
            this.$refs.container.removeEventListener('mouseup', this.onCanvasMouseUp)
            this.$refs.container.removeEventListener('mousemove', this.onCanvasMouseMove)
            window.removeEventListener('mouseout', this.onMouseLeave)
        },
        components: {
            Footer
        }
    }

</script>

<style lang="scss" scoped>
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
    }
}
.main {
    padding: 200px 0;
    margin-top: 200px;
    .main-content {
        padding: 20px 20px 0;
        margin: 100px auto 50px;
        .grid {
            @include mq(sm) {
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 15%;
                max-width: 1040px
            }
            .sticky {
                position: sticky;
                top: 40px;
                p {
                    margin: 48px 0;
                    line-height: 1.8rem;
                }
                .commands-link {
                    color: clr(brand, cyan);
                    &:hover,
                    &:focus {
                        filter: grayscale(1) drop-shadow(1px 2px 3px #000c);
                    }
                }
            }
            .scroll-side {
                $icon-size: 32px;
                margin-top: 64px;
                @include mq(sm) {
                    margin-top: 0;
                }
                .dotted-line {
                    left: $icon-size / 2;
                }
                .checklist {
                    display: flex;
                    .hide-points {
                        background-color: clr(background, secondary);
                    }
                    .list-icon-container{
                        position: relative;
                        &::before {
                            content: '';
                            position: absolute;
                            top: $icon-size / 2;
                            left: $icon-size / 2;
                            width: $icon-size * 2;
                            height: $icon-size * 2;
                            transform: translate($icon-size * -1, $icon-size * -1);
                            border-radius: 50%;
                            background-color: clr(background, bright);
                        }
                    }
                    .list-icon {
                        position: relative;
                        flex: 0 0 auto;
                        width: $icon-size;
                    }
                    .checklist-content {
                        padding-left: 25px;
                        @include mq(md) {
                            padding-left: 50px;
                        }
                        h3 {
                            line-height: $icon-size;
                            font-size: 17px;
                        }
                        .checklist-item {
                            font-size: 15px;
                            line-height: 28px;
                            margin: 12px 0;
                            padding-left: $icon-size;
                            position: relative;
                            .checkmark-icon {
                                position: absolute;
                                left: 0;
                                top: 4px;
                                height: 18px;
                                width: 18px;
                            }
                        }
                    }
                }
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
    @include mq(sm) {
        margin-top: 100px;
    }
    .banner {
        display: flex;
        flex-direction: column;
        @include mq(sm) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        div {
            position: relative;
            height: 100vw;
            @include mq(sm) {
                height: 33vw;
            }
            span {
                max-width: 200px;
                color: clr(text, secondary);
            }
        }
        .pink::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            height: 100%; width: 100%;
            filter: brightness(0.4);
            background-color: clr(brand, pink);
        }
        .blue::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            height: 100%; width: 100%;
            filter: brightness(0.4);
            background-color: clr(brand, blue);
        }
        .cyan::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            height: 100%; width: 100%;
            filter: brightness(0.4);
            background-color: clr(brand, cyan);
        }
    }
}
.third-content {
    .donate {
        background-color: clr(background);
        padding: 200px 20px;
    }
}
.cta {
    height: 52px;
    line-height: 52px;
    width: 240px;
    text-align: center;
    border-radius: 4px;
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
        transform: translateY(-1px);
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
</style>
