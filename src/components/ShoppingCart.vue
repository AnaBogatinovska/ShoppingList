<template>
  <div>
      <div v-for="item in filteredCartItems" :key="item.Id">
          <span>{{ item.Name }}- {{ item.Price }}-- Amount: {{ item.Amount }}</span>
      </div>
      <div>Sum: {{ sum() }}</div>
  </div>
</template>

<script>
export default {
    props: ['cartItems'],
    data() {
        return { 
        
        }
    },
    computed: {
        filteredCartItems () {
            let result = this.cartItems.filter(e => e.AddedToCart)
            return result
        }
    },
    methods: {
        sum() {
            let result = this.cartItems.filter(e => e.AddedToCart)
            let sum = 0;

            result.forEach(element => {
                let amPr = null

                    if(element.Amount) {
                        amPr = +element.Amount*+element.Price
                        sum += amPr
                    } else {
                        sum += +element.Price
                    }
            });
            return sum
        }
    }
}
</script>

<style>

</style>