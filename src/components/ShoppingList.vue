<template>
  <div class="container">
    <div class="inner-content">
      <div class="box-container">
        <div class="box-body">
          <div class="list-item" v-for="i in [ 1,2,3,4 ]" :key="i">
            <div class="item-body" >
              <h3>ITEM</h3>
              <div style="text-align: end">
                <span>cost: 5 </span>
              </div>
              <div>
                <div>
                  <span>amount:</span>
                  <input type="number" />
                </div>
                <div>
                  <button>add to cart</button>
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
export default {};
</script>

<style scoped>
.box-body {
    display: flex;
    flex-wrap: wrap;
}
.list-item {
    flex: 1 0 25%;
}
</style>