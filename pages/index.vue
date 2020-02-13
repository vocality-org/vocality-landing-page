<template>
  <div class="index">
    <div ref="container" id="container">
      <!--canvas goes here-->
    </div>
    <section class="header flex max-mid my0 mx-auto z1 relative">
      <div class="header-content">
        <h1 class="no-events-on-drag">Vocality</h1>
        <p class="h4 no-events-on-drag">
          Extendable Discord Bot building Framework
        </p>
        <router-link to="cli">
          <v-btn large color="primary" class="no-events-on-drag">
            Get Started
          </v-btn>
        </router-link>
      </div>
    </section>

    <section class="maine">
      <div class="maine__background">
        <div class="color-grid">
          <div class="stripe">
            <div class="stripe__pink"></div>
            <div class="stripe__blue"></div>
            <div class="stripe__cyan"></div>
          </div>
        </div>
      </div>
      <div class="maine__content">
        <div class="split-panel">
          <div class="grid flex flex-column">
            <div>
              <div class="sticky">
                <h2 class="h1 m0">Built to extend</h2>
                <p class="h3">
                  Vocality focuses on providing a minimum discord bot that can
                  easily be extended with either official or third party
                  plugins. Plugins can add functionality to the bot in the form
                  of commands. By default vocality only has two commands.
                </p>
                <nuxt-link
                  to="/plugins"
                  tag="a"
                  class="commands-link h3 flex items-center"
                >
                  See full list of plugins and commands
                  <img
                    src="@/assets/icons/arrow-right.svg"
                    alt="arrow pointing right"
                    style="margin-left: 5px;"
                  />
                </nuxt-link>
              </div>
            </div>
            <div class="scroll-side relative">
              <div class="dotted-line h-100 absolute top-0">
                <svg
                  preserveAspectRatio="xMidYMin slice"
                  width="2px"
                  height="100%"
                  viewBox="0 0 2 995"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M1,1 L1,1001"
                    stroke="#f2f2f280"
                    stroke-width="2"
                    stroke-dasharray="2 8"
                  ></path>
                </svg>
              </div>
              <section class="checklist">
                <div class="list-icon-container">
                  <v-icon class="list-icon">{{ musicIcon }}</v-icon>
                </div>
                <div class="checklist-content pb3">
                  <h3 class="h3 m0">Music</h3>
                  <ul class="checklist-content__ul m0 p0">
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Youtube
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Soundcloud
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Spotify
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Autoplay
                    </li>
                    <li class="checklist-item">
                      And more ...
                    </li>
                  </ul>
                </div>
              </section>

              <section class="checklist">
                <div class="list-icon-container">
                  <v-icon class="list-icon">{{ voteIcon }}</v-icon>
                </div>
                <div class="checklist-content pb3">
                  <h3 class="h3 m0">Votes</h3>
                  <ul class="checklist-content__ul m0 p0">
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Polls
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Anonymous Polls
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Custom Deadline
                    </li>
                  </ul>
                </div>
              </section>

              <section class="checklist">
                <div class="list-icon-container hide-points">
                  <v-icon class="list-icon">{{ randomIcon }}</v-icon>
                </div>
                <div class="checklist-content pb3">
                  <h3 class="h3 m0">Random</h3>
                  <ul class="checklist-content__ul m0 p0">
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Numbers
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Words
                    </li>
                    <li class="checklist-item">
                      <img
                        src="@/assets/icons/checkmark.svg"
                        alt="checkmark"
                        class="checkmark-icon"
                      />
                      Images
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
//@ts-ignore (we dont need not types)
import * as THREE from 'three-full';
import { mdiMusic, mdiLanguageTypescript, mdiVote, mdiNumeric } from '@mdi/js';

@Component({})
export default class Index extends Vue {
  camera: THREE.PerspectiveCamera | null = null;
  scene: THREE.Scene | null = null;
  renderer: THREE.WebGLRenderer | null = null;
  logo: THREE.Scene | null = null;
  ww = process.browser ? window.innerWidth : 0;
  wh = process.browser ? window.innerHeight : 0;
  rotationState = -1;
  isScrollingDown = true;
  isScrollEnabled = true;
  previousScrollPosition = 0;
  isGrabbing = false;
  previousMousePosition = {
    x: 0,
    y: 0,
  };

  musicIcon = mdiMusic;
  tsIcon = mdiLanguageTypescript;
  voteIcon = mdiVote;
  randomIcon = mdiNumeric;

  init() {
    let container = document.getElementById('container')!;

    this.camera = new THREE.PerspectiveCamera(50, this.ww / this.wh);
    this.camera.position.z = 0.75;
    this.camera.position.y = 0.3;

    this.scene = new THREE.Scene();

    const light = new THREE.AmbientLight('#fff', 1);
    this.scene.add(light);

    new THREE.GLTFLoader().load(
      'vocality-logo-3d.glb',
      (gltf: any) => {
        this.logo = gltf.scene!;
        this.logo!.scale.set(4.5, 4.5, 4.5);
        this.logo!.position.set(0.3, 0.24, 0);
        this.scene!.add(this.logo!);
      },
      (xhr: any) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#252525', 1);
    this.renderer.gammaOutput = true;
    this.renderer.setSize(this.ww, this.wh);
    container.appendChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.logo) {
      if (this.logo.rotation.y > 0.45) {
        this.rotationState = -1;
      } else if (this.logo.rotation.y < -0.65) {
        this.rotationState = 1;
      }
      this.logo.rotation.y += 0.001 * this.rotationState;
    }
    this.renderer!.render(this.scene!, this.camera!);
  }

  animateOnScroll() {
    //updateOnSroll(0, this.wh * 1.5, (position: any) => {
    //  if (position === 1 && this.isScrollEnabled) {
    //    if (this.$refs.container) {
    //      (this.$refs.container as HTMLElement).style.transform =
    //        'translateX(100vw)';
    //    }
    //    this.isScrollEnabled = false;
    //    return;
    //  }
    //
    //  if (position < 1 && !this.isScrollEnabled) {
    //    if (this.$refs.container) {
    //      (this.$refs.container as HTMLElement).style.transform =
    //        'translateX(0px)';
    //    }
    //    this.isScrollEnabled = true;
    //  }
    //
    //  this.isScrollingDown = position >= this.previousScrollPosition;
    //  this.logo!.rotation.y += this.isScrollingDown ? 0.05 : -1 * 0.05;
    //
    //  if (position < 0.5) {
    //    this.logo!.position.x = -1 * position + 0.28;
    //  }
    //
    //  this.previousScrollPosition = position;
    //});
  }

  onResize() {
    if (this.renderer && this.camera) {
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      this.renderer.setSize(ww, wh);
      this.camera.aspect = ww / wh;
      this.camera.updateProjectionMatrix();
    }
  }

  onCanvasMouseDown() {
    this.isGrabbing = true;
    (this.$refs.container as HTMLElement).style.cursor = 'grabbing';
    const list = document.getElementsByClassName('no-events-on-drag');
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      (element as HTMLElement).style.pointerEvents = 'none';
    }
  }

  onCanvasMouseUp() {
    this.isGrabbing = false;
    (this.$refs.container as HTMLElement).style.cursor = 'grab';
    //this.animateToInit();
    const list = document.getElementsByClassName('no-events-on-drag');
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      (element as HTMLElement).style.pointerEvents = 'auto';
    }
  }

  onCanvasMouseMove(e: any) {
    const deltaMove = {
      x: e.offsetX - this.previousMousePosition.x,
      y: e.offsetY - this.previousMousePosition.y,
    };

    if (this.isGrabbing) {
      const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.toRadians(deltaMove.y * 0.1),
          this.toRadians(deltaMove.x * 0.1),
          0
        )
      );
      this.logo!.quaternion.multiplyQuaternions(
        deltaRotationQuaternion,
        this.logo!.quaternion
      );
    }

    this.previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY,
    };
  }
  onMouseLeave() {
    this.isGrabbing = false;
  }
  toRadians(angle: any) {
    return angle * (Math.PI / 180);
  }

  mounted() {
    if (process.browser) {
      this.init();
      this.animate();
      this.animateOnScroll();
    }
  }

  created() {
    if (process.browser) {
      window.addEventListener('resize', this.onResize);
      this.$nextTick(() => {
        (this.$refs.container as HTMLElement).addEventListener(
          'mousedown',
          this.onCanvasMouseDown
        );
        (this.$refs.container as HTMLElement).addEventListener(
          'mouseup',
          this.onCanvasMouseUp
        );
        (this.$refs.container as HTMLElement).addEventListener(
          'mousemove',
          this.onCanvasMouseMove
        );
        window.addEventListener('mouseout', this.onMouseLeave);
      });
    }
  }

  //beforeDestroy() {
  //  window.removeEventListener('resize', this.onResize);
  //  (this.$refs.container as HTMLElement).removeEventListener(
  //    'mousedown',
  //    this.onCanvasMouseDown
  //  );
  //  (this.$refs.container as HTMLElement).removeEventListener(
  //    'mouseup',
  //    this.onCanvasMouseUp
  //  );
  //  (this.$refs.container as HTMLElement).removeEventListener(
  //    'mousemove',
  //    this.onCanvasMouseMove
  //  );
  //  window.removeEventListener('mouseout', this.onMouseLeave);
  //}
}
</script>

<style lang="scss" scoped>
#container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.header {
  position: fixed;
  top: 240px;
  left: 240px;
  padding: 20px 20px 0px;
  @include mq(sm) {
    padding-top: 120px;
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

.maine {
  position: relative;
  margin-top: 115vh;
  &__background {
    transform: skewY(-12deg);
    z-index: 1;
    position: absolute;
    background: #303030;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100vw;
    .color-grid {
      width: 100%;
      height: 100%;
      $row-height: 64px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: $row-height 1fr;
      .stripe {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        height: $row-height + 16px;
        &__pink {
          background-color: clr(brand, pink);
        }
        &__blue {
          background-color: clr(brand, blue);
        }
        &__cyan {
          background-color: clr(brand, cyan);
        }
      }
    }
  }
  &__content {
    padding: 200px;
    position: relative;
    z-index: 2;
    .split-panel {
      padding: 20px 20px 0;
      margin: 100px auto 50px;
      .grid {
        @include mq(sm) {
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 15%;
          max-width: 1040px;
        }
        .sticky {
          position: sticky;
          top: 100px;
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
          position: relative;
          $icon-size: 32px;
          margin-top: 64px;
          @include mq(sm) {
            margin-top: 0;
          }
          .dotted-line {
            position: absolute;
            height: 100%;
            top: 0;
            left: $icon-size / 2;
          }
          .checklist {
            display: flex;
            .hide-points {
              background-color: clr(background, secondary);
            }
            .list-icon-container {
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
              height: $icon-size;
            }
            .checklist-content {
              &__ul {
                list-style-type: none;
              }
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
  }
}
</style>
