<template>
  <div class="container">
    <div class="inner-content">
      <Header />
      <button class="add-item" @click="isOpenForm = true">add item</button>
      <ShoppingList :shoppingItems="listItems" />
      <AddItemForm
        v-if="isOpenForm"
        @cancelForm="isOpenForm = false"
        @onSubmitForm="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import AddItemForm from "../components/AddItemForm.vue";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList.vue";
import itemsStorage from "../storage/ListStore";

export default {
  name: "LandingPage",
  components: {
    Header,
    ShoppingList,
    AddItemForm,
  },
  data() {
    return {
      isOpenForm: false,
      listItems: [],
    };
  },
  mounted() {
    this.listItems = itemsStorage.getListItems();
  },
  methods: {
    onSubmit(item) {
      itemsStorage.pushItem(item);
      this.isOpenForm = false;
    },
    test() {
      console.log("in");
      this.isOpenCart = true;
    },
  },
};
</script>

<style scoped>
.add-item {
  margin: 20px 5px;
  background: #e88635;
  color: #fff;
  border: none;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 10px 10px;
}
</style>