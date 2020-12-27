<template>
  <div class="backdrop">
    <div class="cart">
      <div class="cart-body">
        <div class="box">
          <div>
            <h3>ShoppingCart</h3>
          </div>
          <div
            class="cart-item"
            v-for="item in filteredCartItems"
            :key="item.Id"
          >
            <div class="cart-item-body">
              <h3 style="text-transform: uppercase; margin-bottom: 16px">
                {{ item.Name }}
              </h3>
              <div class="info">
                <input type="number" v-model.number="item.Amount" />
                <span class="cost">{{ item.Price }} ден.</span>
                <button>delete item</button>
              </div>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 24px;
            "
          >
            <div class="total">
              Total: <span>{{ sum() }} ден.</span>
            </div>

            <div>
              <button type="button" @click="$emit('cancelCart')">Cancel</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItems", "closeCart"],
  data() {
    return {};
  },
  computed: {
    filteredCartItems() {
      let result = this.cartItems.filter((e) => e.AddedToCart);
      return result;
    },
  },
  methods: {
    sum() {
      let result = this.cartItems.filter((e) => e.AddedToCart);
      let sum = 0;

      result.forEach((element) => {
        let amPr = null;

        if (element.Amount) {
          amPr = +element.Amount * +element.Price;
          sum += amPr;
        } else {
          sum += +element.Price;
        }
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.backdrop {
  background-color: #000000a8;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 1;
}

.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0px;
  left: 0;
  bottom: 0;
  /* margin-bottom: 35px; */
  overflow: scroll;
}

.cart-body {
  width: 100%;
  /* padding: 12px; */
  padding-bottom: 50px;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
}

.cart-body .box {
  flex: 1;
  background: #27273c;
  box-shadow: 0 0 5px -2px #eee;
  border-radius: 5px;
  max-width: 400px;
  padding: 12px;
}

.cart-body h3 {
  text-align: center;
}

.cart-item {
  margin: 8px 0;
  padding: 12px 8px;
  box-shadow: 0px 0px 4px -1px rgba(151, 151, 151, 0.719);
}

.cart-item-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-item-body .info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8px;
}

.cart-item-body .info .cost {
  display: table-cell;
  background: green;
  padding: 2px 4px;
  vertical-align: middle;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), inset 0 1px rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(-180deg, #d82d2d 0%, #e29100 100%);
  border-radius: 5px;
  font-size: 14px;
  text-transform: lowercase;
}

.total {
  color: #5ee814;
  padding: 3px 8px;
}
.total span {
  font-weight: bold;
}
</style>