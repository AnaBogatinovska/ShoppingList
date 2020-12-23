<template>
  <div>
     <Header />
     <ShoppingList />
  </div>
</template>

<script>
import Header from '../components/Header'
import ShoppingList from '../components/ShoppingList.vue'

export default {
    name: 'LandingPage',
    components: {
        Header,
        ShoppingList
    }
}
</script>

<style>

</style>