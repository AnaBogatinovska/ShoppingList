<template>
  <div>
    <header>
      <div class="container">
        <div class="inner-content">
          <div class="header-wrapper">
            <h1>SHOPPING LIST</h1>
            <div>
              <span @click="isOpenCart = true" class="material-icons cart">
                shopping_cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <ShoppingCart :cartItems="listItems" v-if="isOpenCart" @cancelCart='closeCart'/>
  </div>
</template>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";
import itemsStorage from "../storage/Store";

export default {
  name: "Header",
  components: {
    ShoppingCart,
  },
  data() {
    return {
      listItems: [],
      isOpenCart: false,
    };
  },
  mounted() {
    this.listItems = itemsStorage.getListItems();
  },
  methods: {
    closeCart() {
      this.isOpenCart = false
    }
  },
};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(255 255 255 / 7%);
  padding-bottom: 12px;
}

.header-wrapper h1 {
  color: rgb(218, 111, 84);
}

.cart {
  color: #da6f54;
  font-size: 30px;
  border: 1px solid #da6f54;
  border-radius: 5px;
  padding: 1px 6px;
  cursor: pointer;
}
</style>
