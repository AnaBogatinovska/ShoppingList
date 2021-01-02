<template>
  <div class="backdrop-form">
    <form class="form" @submit.prevent="onSubmit">
      <div class="head">
        <h4>ADD ITEM</h4>
      </div>
      <div class="form-label">
        <label class="item" for="">Name: </label>
        <input class="item input" type="text" required v-model="Item.Name" />
      </div>
      <div class="form-label">
        <label class="item" for="">Price: </label>
        <input class="item input" type="number" required v-model="Item.Price" />
      </div>
      <div class="btn-handlers">
        <button type="button" class="cancel-btn" @click="closeForm">Cancel</button>
        <button type="submit" class="ok-btn">OK</button>
      </div>
    </form>
  </div>
</template>

<script>
import itemsStorage from "../storage/ListStore";

export default {
  name: "AddItemForm",
  data() {
    return {
      Item: {
        Id: 1,
        Name: "",
        Price: 0,
        Amount: 1
      },
    };
  },
  methods: {
    onSubmit() {
      (this.Item.Price < 0) ? alert('Please enter valid Price') :  itemsStorage.pushItem(this.Item);
      this.$router.go(-1)
    },
      closeForm() {
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.backdrop-form {
  background-color: #000000a8;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
}
.form {
  max-width: 250px;
  background: #27273c;
  border-radius: 5px;
  margin: 0 auto;
  padding: 16px;
  margin-top: 50px;
}
.form .head {
  text-align: center;
  color: #fff;
  margin: 12px 0 20px;
}
.form-label {
  display: flex;
  margin-bottom: 16px
}
.form-label label {
  flex: 0 0 20%;
  color: #fff;
}

.form-label input {
  flex: 1;
  background: #ffffff38;
  border: none;
  border-radius: 4px;
  padding: 3px 5px;
  color: #fff;
}

.btn-handlers {
  text-align: end;
  margin-top: 28px;
}
.btn-handlers button { 
  border: none;
  border-radius: 5px;
  color: #FFF;
  padding: 3px 8px;
}
.cancel-btn {
  background: rgba(255, 81, 0, 0.726);
  margin-right: 16px;
  transition: all 0.2s;
}
.cancel-btn:hover {
  background: rgba(209, 91, 37, 0.726);
  transition: all 0.2s;
}
.ok-btn {
  background: rgba(30, 99, 139, 0.918);
  transition: all 0.2s;
}
.ok-btn:hover {
  background: rgba(26, 68, 92, 0.918);
  transition: all 0.2s;
}
</style>