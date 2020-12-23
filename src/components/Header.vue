<template>
  <header>
      <div class="container">
        <div class="inner-content">
            <div class="header-wrapper">
                <h1>SHOPPING LIST</h1>
                <div>
                   <!-- <i class="fab fa-accusoft"></i> -->
                    <img src="../assets/cart.png" alt="cart" width="50" height="50">
                </div>
            </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-wrapper {
    display: flex;
    justify-content:  space-between;
    align-items: center;
    padding: 10x 0 ;
    border-bottom: 1px solid #eee;
}

.header-wrapper h1 {
    color: rgb(218, 111, 84)
}
</style>
