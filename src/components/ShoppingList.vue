<template>
  <div class="container">
    <div class="inner-content">
      <div class="box-container">
        <div class="box-body">
          <div class="list-item" v-for="item in shoppingItems" :key="item.Id">
            <div class="item-body" :class="{ added: item.AddedToCart }">
              <div class="delete-item">
                <span
                  class="material-icons del-item-icon"
                  @click="deleteItem(item)"
                >
                  highlight_off
                </span>
              </div>
              <h3>{{ item.Name }}</h3>
              <div style="text-align: end; margin: 16px 0;">
                <span>cost: {{ item.Price }} </span>
              </div>
              <div class="item-form">
                <div>
                  <label>amount:</label>
                  <input type="number" required :class="{ disabled: item.AddedToCart }" :disabled="item.AddedToCart"  v-model.number="item.Amount"/>
                </div>
                <div>
                  <button @click="addToCart(item, item.Amount)">add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsStorage from "../storage/Store";

export default {
  name: "ShoppingList",
  props: ["shoppingItems"],
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    deleteItem(item) {
      itemsStorage.removeItem(item);
    },

    addToCart(item, amount) {
      itemsStorage.addToCartAndAmount(item, amount)
    }
  },
};
</script>

<style scoped>
.box-body {
  display: flex;
  flex-wrap: wrap;
}
input {
  width: 60px;
}

input.disabled {
  cursor: not-allowed;
}
.list-item {
  flex: 1 0 25%;
}
.item-body {
  padding: 10px;
  margin: 5px;
  box-shadow: 0 0 5px -2px aliceblue;
  border-radius: 4px;
  color: #eee;
  position: relative;
}

.item-body.added {
   box-shadow: 0 0 5px 1px #da6f54;
    transition: all 0.5s;
}

.item-body h3 {
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0;
}

.item-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-item {
  position: absolute;
  right: 3px;
  top: 3px;
}
.del-item-icon {
  font-size: 20px;
  cursor: pointer;
}
</style>