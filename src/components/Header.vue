<template>
  <header>
    <div class="container">
      <div class="inner-content">
        <div class="header-wrapper">
          <h1>SHOPPING LIST</h1>
          <div>
            <!-- <i class="fab fa-accusoft"></i> -->
            <span class="material-icons cart"> shopping_cart </span>
            <!-- <img src="../assets/cart.png" alt="cart" width="50" height="50"> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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
