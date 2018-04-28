const state = {
  productList: []
}
const getters = {
  listLength: state => state.productList
}
const mutations = {
  addProduct (state, product) {
    state.productList.push(product)
  }
}
const actions = {
  fetchList ({ commit, state }, product) {
    setTimeout(function () {
      commit('addProduct', product)
    }, 800)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
