<template>
  <div class="donate text-center">
    <section class="donate-cta max-mid mx-auto">
      <h2 class="m0 h1 mb4 pb2">Supporting Vocality</h2>
      <p class="m0 mb3 pb1 bold">
        Quo totam quo nemo quas doloremque voluptatem maxime. Qui aut quidem
        commodi non blanditiis. Libero fuga expedita id assumenda dicta qui
        fuga. Maxime nisi voluptas fugiat. Quia qui suscipit rerum aut nostrum.
      </p>
      <p class="m0 secondary-paragraph">
        Ut eos tenetur quas qui et veritatis ratione. Assumenda repellat quas
        facere aut voluptatem sit voluptatem. Corporis aliquid fugiat sit illum.
        Sed et maiores asperiores enim. Qui quia occaecati suscipit.
      </p>
    </section>
    <section class="select-amount">
      <h3 class="m0 h2 p4">Select amount</h3>
      <div class="grid mx-auto pt3">
        <div class="item h3 relative overflow-hidden" @click="cashGrab('5.00')">
          5 €
        </div>
        <div
          class="item h3 relative overflow-hidden"
          @click="cashGrab('10.00')"
        >
          10 €
        </div>
        <div
          class="item h3 relative overflow-hidden"
          @click="cashGrab('25.00')"
        >
          25 €
        </div>
        <div
          class="item h3 relative overflow-hidden"
          @click="cashGrab('50.00')"
        >
          50 €
        </div>
        <div class="item h3 relative overflow-hidden">
          OTHER
          <div class="popup other">
            <div class="flex flex-column justify-center items-center h-100">
              <div>
                <input
                  class="my2 pr1"
                  type="number"
                  min="0"
                  v-model="otherInputValue"
                />
                <span>€</span>
              </div>
              <transition name="slide-up">
                <a
                  v-if="submittable"
                  class="submit"
                  @click="cashGrab(otherInputValue)"
                  >SUBMIT</a
                >
              </transition>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-down">
        <div class="checkout" v-if="showCheckout">
          <div class="cancel">
            <a
              class="cancel-link"
              @click="
                showCheckout = false;
                alreadyRendered = false;
              "
              >cancel</a
            >
          </div>
          <div id="paypal-button-container"></div>
        </div>
      </transition>
    </section>
    <section class="other-inqs">
      <h2 class="h1 m0 mb3">For other Inquiries</h2>
      <router-link to="/contact" class="cta h3 bold py1 px3">
        Contact Us
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'donate',
  components: {},
  data() {
    return {
      otherInputValue: '',
      checkoutAmount: 0,
      showCheckout: false,
      alreadyRendered: false,
    };
  },
  computed: {
    submittable() {
      const amount = parseFloat(this.otherInputValue, 10);
      return this.otherInputValue && !isNaN(amount) && amount > 0;
    },
  },
  methods: {
    cashGrab(amount) {
      this.showCheckout = true;
      this.$nextTick().then(() => this.renderPaypalBtn(amount));
    },
    renderPaypalBtn(amount) {
      if (!this.alreadyRendered) {
        this.$paypal
          .Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      currency: 'EUR',
                    },
                  },
                ],
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                console.log('payment approve', details);
              });
            },
          })
          .render('#paypal-button-container');
        this.alreadyRendered = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cancel-link {
  text-decoration: underline;
}
.donate-cta {
  margin-top: 469px;
  padding: 180px 20px 0;
  h2 {
    color: clr(brand, cyan);
  }
  .secondary-paragraph {
    color: clr(text, secondary);
  }
}
.select-amount {
  margin-top: 180px;
  background-color: clr(background, secondary);
  padding: 0 20px;
  .grid {
    padding-bottom: 120px;
    $item-size: 200px;
    display: grid;
    grid-gap: 60px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, $item-size);
    .item {
      width: $item-size;
      height: $item-size;
      line-height: $item-size;
      background-color: clr(brand, cyan);
      box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.2);
      transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      user-select: none;
      font-size: 26px;
      cursor: pointer;
      &:hover,
      &:focus {
        transform: scale(1.1);
        .popup {
          transform: translateY(-$item-size);
        }
      }
      .popup {
        width: $item-size;
        height: $item-size;
        position: absolute;
        background-color: rgba(12, 12, 12, 0.7);
        transition: transform 0.2s ease;
      }
      .other {
        line-height: normal;
        background-color: clr(background, bright);
        input {
          width: $item-size / 2;
          background-color: transparent;
          border: 1px solid transparent;
          border-bottom-color: clr(text, secondary);
          color: clr(text);
          text-align: right;
        }
      }
    }
  }
}
.submit {
  background-color: clr(brand, cyan);
  border-radius: 4px;
  font-size: 14px;
  padding: 6px 12px;
  width: 50%;
  margin-top: 5px;
  &:hover {
    transform: translateY(2px);
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.2s ease opacity 0.2s ease;
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 250ms ease-out, opacity 250ms ease-out;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.other-inqs {
  padding-top: 180px;
}
.footer {
  padding-top: 180px;
}
.cancel {
  margin-top: -80px;
  position: absolute;
  width: 100%;
}
.checkout {
  position: relative;
  padding: 20px 0 120px 0;
}
</style>
