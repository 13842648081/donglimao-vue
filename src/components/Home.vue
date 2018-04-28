<template>
  <ul>
    <li v-for="(product, index) in productList" :key="product.id+index">
      {{product.id}}
    </li>
  </ul>
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
    ...mapActions('home', ['fetchList'])
  },
  created () {
    this.fetchList(this.product)
  }
}
</script>
