<template>
  <div>
    <ul>
      <li v-for="(product, index) in productList" :key="product.id+index">
        <router-link :to="`/product`">{{product.id}}</router-link>
      </li>
    </ul>
    <button v-on:click="test">alert test button</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      product: { id: 2, name: 'ljx' }
    }
  },
  computed: {
    ...mapState('home', ['productList'])
  },
  methods: {
    test () {
      alert('test')
    },
    ...mapActions('home', ['fetchList'])
  },
  created () {
    this.fetchList(this.product)
  }
}
</script>
